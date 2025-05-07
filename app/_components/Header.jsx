"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  const { user } = useUser();
  const pathname = usePathname();

  const hideHeader =
    pathname.includes("sign-in") || pathname.includes("sign-up");

  // if (hideHeader) return null;
  return (
    !hideHeader && (
      <div>
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
            <a className="block text-teal-600" href="#">
              <Image src={"/logo.svg"} width={40} height={40} alt={"logo"} />
            </a>

            <div className="flex flex-1 items-center justify-end md:justify-between">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href={"/"}
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      Explore
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      Projects
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <Link href="/cartItems">
                  <div className="flex items-center gap-2 rounded-md bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75">
                    <FiShoppingCart />
                    <p className="text-xs">({cartItems && cartItems.length})</p>
                  </div>
                </Link>
                {!user ? (
                  <div className="sm:flex sm:gap-4">
                    <a
                      className="block rounded-md bg-[var(--bg-primary)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--color-hover)]"
                      href="/sign-in"
                    >
                      Login
                    </a>

                    <a
                      className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
                      href="/sign-up"
                    >
                      Register
                    </a>
                  </div>
                ) : (
                  <div className="">
                    <UserButton />
                  </div>
                )}

                <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  );
};

export default Header;
