import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { db, payments, users, NewPayment } from '@/app/lib/drizzle';
import { eq } from 'drizzle-orm';

const stripeKey = process.env.STRIPE_SECRET_KEY;
if (!stripeKey) {
  console.error("STRIPE_SECRET_KEY environment variable is not set");
  throw new Error("Stripe configuration is missing");
}

const stripe = new Stripe(stripeKey, {
  apiVersion: '2025-05-28.basil',
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const paymentIntentId = searchParams.get('payment_intent');
    const userEmail = searchParams.get('email'); 

    if (!paymentIntentId) {
      return NextResponse.json(
        { error: 'Payment intent ID is required' },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    if (paymentIntent.status === 'succeeded') {
      try {
        const existingPayment = await db
          .select()
          .from(payments)
          .where(eq(payments.stripeid, paymentIntentId))
          .limit(1);

        if (existingPayment.length === 0) {
          let userId = null;

          if (userEmail) {
            console.log("Looking up user with email: " + userEmail);
            const user = await db
              .select()
              .from(users)
              .where(eq(users.email, userEmail))
              .limit(1);
            
            if (user.length > 0) {
              userId = user[0].id;
              console.log("Found user with ID: " + userId);
            } else {
              console.log("No user found with email: " + userEmail);
            }
          } else {
            console.log("No email provided - payment will be saved without user association");
          }
          const paymentData: NewPayment = {
            stripeid: paymentIntent.id,
            amount: paymentIntent.amount, 
            userid: userId,
          };
          const insertedPayment = await db
            .insert(payments)
            .values(paymentData)
            .returning();

          console.log('Payment saved to database:', {
            id: insertedPayment[0].id,
            stripeid: paymentIntentId,
            amount: paymentIntent.amount,
            userId: userId
          });
        } else {
          console.log('Payment already exists in database');
        }
      } catch (dbError) {
        console.error('Error saving payment to database',dbError);
      }
    }

    return NextResponse.json({
      status: paymentIntent.status === 'succeeded' ? 'succeeded' : 'failed',
      transactionId: paymentIntent.id,
      amount: paymentIntent.amount / 100, 
      currency: paymentIntent.currency,
      created: paymentIntent.created,
      paymentMethod: paymentIntent.payment_method,
      saved: paymentIntent.status === 'succeeded' ? true : false,
    });

  } catch (error) {
    console.error('Error verifying payment:', error);
    return NextResponse.json(
      { error: 'Failed to verify payment' },
      { status: 500 }
    );
  }
}
