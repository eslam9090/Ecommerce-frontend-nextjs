import Image from "next/image";
import Link from "next/link";
import React from "react";

export const generateMetadata = () => {
  return {
    title: {
      absolute: "Payment Confirmation",
    },
    description: "Payment Confirmation",
  };
};
const ConfirmPayment = () => {
  return (
    <div className="flex mt-20  items-center justify-center flex-col  ">
      <Image
        className="mx-auto"
        src="/confirmpay.gif"
        alt="confirm-payment"
        width={200}
        height={200}
      />
      <h1 className="text-2xl font-bold text-center mt-4">
        Payment Confirmed!
      </h1>
      <p className="text-center mt-2 text-gray-600">
        We sent an email with your order confirmation and receipt.
      </p>

      <Link
        href="/"
        className="  bg-[var(--bg-primary)] cursor-pointer hover:bg-[var(--color-hover)] text-white px-4 py-2 rounded mt-4"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default ConfirmPayment;
