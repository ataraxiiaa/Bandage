import { NextRequest, NextResponse } from 'next/server';
import { db, payments, users } from '@/app/lib/drizzle';
import { eq, desc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userid');
    const userEmail = searchParams.get('email');

    if (!userId && !userEmail) {
      return NextResponse.json(
        { error: 'User ID or email is required' },
        { status: 400 }
      );
    }

    type UserPayment = {
      id: number;
      stripeid: string;
      amount: number;
      createdAt: Date;
      userEmail?: string;
      userName?: string;
    };

    let userPayments: UserPayment[] = [];

    if (userId) {
      userPayments = await db
        .select({
          id: payments.id,
          stripeid: payments.stripeid,
          amount: payments.amount,
          createdAt: payments.created_at,
        })
        .from(payments)
        .where(eq(payments.userid, parseInt(userId)))
        .orderBy(desc(payments.created_at)) as UserPayment[];
    } else if (userEmail) {
      userPayments = await db
        .select({
          id: payments.id,
          stripeid: payments.stripeid,
          amount: payments.amount,
          createdAt: payments.created_at,
          userEmail: users.email,
          userName: users.name,
        })
        .from(payments)
        .innerJoin(users, eq(payments.userid, users.id))
        .where(eq(users.email, userEmail))
        .orderBy(desc(payments.created_at)) as UserPayment[];
    }

    return NextResponse.json({
      success: true,
      payments: userPayments,
      count: userPayments.length,
    });

  } catch (error) {
    console.error('Error fetching user payments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch payments' },
      { status: 500 }
    );
  }
}
