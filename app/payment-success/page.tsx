"use client";

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const amount = searchParams.get('amount');
  const paymentIntent = searchParams.get('payment_intent');
  const email = searchParams.get('email');
  const [paymentStatus, setPaymentStatus] = useState<'loading' | 'succeeded' | 'failed'>('loading');
  const [transactionId, setTransactionId] = useState<string>('');

  useEffect(() => {
    if (paymentIntent) {
      const apiUrl = email 
        ? `/api/verify-payment?payment_intent=${paymentIntent}&email=${encodeURIComponent(email)}`
        : `/api/verify-payment?payment_intent=${paymentIntent}`;
        
      fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
          setPaymentStatus(data.status);
          setTransactionId(data.transactionId || paymentIntent);
        })
        .catch(() => {
          setPaymentStatus('succeeded'); 
          setTransactionId(paymentIntent);
        });
    } else {
      setPaymentStatus('succeeded');
      setTransactionId(Date.now().toString());
    }
  }, [paymentIntent, email]);

  if (paymentStatus === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  if (paymentStatus === 'failed') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Payment Failed</h1>
          <p className="text-gray-600 mb-6">Unfortunately, your payment could not be processed. Please try again.</p>
          <button
            onClick={() => window.location.href = '/checkout'}
            className="w-full bg-black text-white py-3 px-4 rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Payment Successful!
        </h1>
        
        <p className="text-gray-600 mb-6">
          Thank you for your payment. Your transaction has been completed successfully.
        </p>
        
        {amount && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-500">Amount Paid</p>
            <p className="text-xl font-semibold text-gray-900">${amount}</p>
          </div>
        )}

        {transactionId && (
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-gray-500">Transaction ID</p>
            <p className="text-sm font-mono text-gray-700 break-all">{transactionId}</p>
          </div>
        )}

        <div className="space-y-3">
          <Link
            href="/"
            className="w-full bg-[#23A6F0] text-white py-3 px-4 rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    }>
      <PaymentSuccessContent />
    </Suspense>
  );
}
