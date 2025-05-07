// app/not-found.js
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-32">
      <Image
        src={"/notfound.png"}
        alt="error"
        width={600}
        height={600}
        className="mb-4 text-center mx-auto"
      />
      <p className="mb-6 text-lg">This Route Does Not Exist</p>
      <Link
        href="/"
        className="bg-[var(--bg-primary)] cursor-pointer hover:bg-[var(--color-hover)] text-white font-semibold px-6 py-2 rounded"
      >
        Home Page
      </Link>
    </div>
  );
}
