"use client";

import Checkout from "../components/checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useState, useEffect } from "react";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

function CheckoutContent() {

  const [plan, setPlan] = useState('FREE');
  
  const searchParams = useSearchParams();
  const amount = Number(searchParams.get('amount')) || 0;

  useEffect(() => {
    if (amount === 9.99) {
      setPlan('STANDARD');
    } else if (amount === 19.99) {
      setPlan('PREMIUM');
    } else {
      setPlan('FREE');
    }
  }, [amount]);

  const name = searchParams.get('name') || '';
  const email = searchParams.get('email') || '';
  const phone = searchParams.get('phone') || '';


  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">{plan}</h1>
        <h2 className="text-2xl">
          Total Amount:
          <span className="font-bold"> ${amount}</span>
        </h2>
        {name && (
          <div className="mt-4 text-sm">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
          </div>
        )}
      </div>

      <Elements
        stripe={stripePromise}
        options={
          amount > 0
            ? {
                mode: "payment",
                amount: Math.round(amount * 100),
                currency: "usd",
              }
            : {
                mode: "setup",
                currency: "usd",
              }
        }
      >
        <Checkout amount={amount} />
      </Elements>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}