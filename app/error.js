"use client";

import Image from "next/image";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-6">
      <Image src={"/error.png"} alt="error" width={400} height={400} />
      <p className="text-red-600 mb-6 text-2xl font-bold">{error.message}</p>
      <button
        onClick={() => reset()}
        className="bg-[var(--bg-primary)] cursor-pointer hover:bg-[var(--color-hover)] text-white font-semibold px-6 py-2 rounded"
      >
        Rest
      </button>
    </div>
  );
}
