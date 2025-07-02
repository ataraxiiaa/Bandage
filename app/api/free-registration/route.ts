import { NextRequest, NextResponse } from 'next/server';
import { db, payments, users, NewPayment } from '@/app/lib/drizzle';
import { eq } from 'drizzle-orm';

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone } = await request.json();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    let userId = null;
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (existingUser.length > 0) {
      userId = existingUser[0].id;
      console.log('Found existing user with ID:', userId);
    } else {
      console.log('User not found, would need to create new user');
    }

    const freeRegistrationId = `free_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const paymentData: NewPayment = {
      stripeid: freeRegistrationId,
      amount: 0, 
      userid: userId,
    };

    await db.insert(payments).values(paymentData).returning();

    return NextResponse.json({
      status: 'succeeded',
      transactionId: freeRegistrationId,
      amount: 0,
      plan: 'FREE',
      message: 'Successfully registered for FREE package',
      saved: true,
    });

  } catch (error) {
    console.error('Error processing FREE registration:', error);
    return NextResponse.json(
      { error: 'Failed to process FREE registration' },
      { status: 500 }
    );
  }
}
