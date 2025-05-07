"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BreadCrumb = () => {
  const path = usePathname();
  const parts = path.split("/");

  return (
    <div>
      <nav aria-label="Breadcrumb " className="w-fit  mt-10 ml-35">
        <ol className="flex overflow-hidden rounded border border-gray-300 bg-white text-sm text-gray-700">
          <li>
            <Link
              href={"/"}
              className="block h-10 bg-gray-100 px-4 leading-10 transition-colors hover:text-gray-900"
            >
              Home
            </Link>
          </li>
          <li className="relative flex items-center">
            <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>

            <Link
              href={"#"}
              className="block h-10 pr-4 pl-6 leading-10 transition-colors hover:text-gray-900"
            >
              {parts[1]}
            </Link>
          </li>
          <li className="relative flex items-center">
            <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>

            <Link
              href={"#"}
              className="block h-10 pr-4 pl-6 leading-10 transition-colors hover:text-gray-900"
            >
              {parts[2]}
            </Link>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
