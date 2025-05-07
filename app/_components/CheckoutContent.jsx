"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";
import CheckoutForm from "../checkout/_components/CheckoutForm";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
const CheckoutContent = () => {
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

export default CheckoutContent;
