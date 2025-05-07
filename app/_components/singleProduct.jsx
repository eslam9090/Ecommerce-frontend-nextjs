import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosList } from "react-icons/io";
const SingleProduct = ({ course }) => {
  return (
    <Link
      href={`/courseDetails/${course.documentId}`}
      className="group block w-[280px]"
    >
      <Image
        src={course?.banner?.url}
        alt={course?.title}
        width={300}
        height={157.5}
        className="object-cover h-[157.5px] "
      />

      <div className="p-3 flex justify-between text-sm bg-gray-100/30">
        <div>
          <h3 className="text-gray-900 weight-800 group-hover:underline group-hover:underline-offset-4">
            {course?.title}
          </h3>
          <div className="flex gap-1  mt-1.5 items-center">
            <p className="  text-gray-500 ">
              <IoIosList className="w-4 h-4" />
            </p>
            <p className=" text-gray-500  text-xs ">{course?.category}</p>
          </div>
        </div>

        <p className="text-gray-900">${course?.price}</p>
      </div>
    </Link>
  );
};

export default SingleProduct;
