import ProductList from "./productList";
import { FaArrowRight } from "react-icons/fa";
import getAllCourses from "../_utils/cousesApi";
import Link from "next/link";
export default async function ProductSection() {
  try {
    const res = await getAllCourses.getAllCourses();
    const data = res?.data?.data;

    return (
      <>
        <div className=" px-4 pb-80 sm:px-6 lg:px-24">
          <div className="flex  justify-between items-center mb-5">
            <h2 className="text-xs lg:text-2xl font-bold text-gray-900">
              Brand New
            </h2>
            <div className=" flex items-center gap-1 ">
              {/* <Link
              href={"#"}
              className="text-xs lg:text-sm  font-bold text-[var(--bg-primary)] text-800"
            >
              View all Collection
              </Link> */}
              {/* <span>
              <FaArrowRight className="w-3 h-3 mt-1  text-[var(--bg-primary)]" />
              </span> */}
            </div>
          </div>
          <ProductList data={data} />
        </div>
      </>
    );
  } catch (error) {
    throw error;
  }
}
