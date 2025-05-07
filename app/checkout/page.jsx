"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./_components/CheckoutForm";
import { useSearchParams } from "next/navigation";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
const Checkout = () => {
  const searchParams = useSearchParams();

  const options = {
    mode: "payment",
    currency: "usd",
    amount: Math.round(Number(searchParams.get("amount")) * 100),
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm
        amount={Math.round(Number(searchParams.get("amount")) * 100)}
      />
    </Elements>
  );
};

export default Checkout;
