"use client";
import Image from "next/image";
import { BsPatchCheck } from "react-icons/bs";
import { FiAlertOctagon } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import SkeletonCourseInfo from "./skeletonCourseInfo";
import { useUser } from "@clerk/nextjs";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { addOrUpdateCartItem } from "../_utils/thunkApi";

const ProductInfo = ({ courseInfo }) => {
  const { user } = useUser();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      dispatch(
        addOrUpdateCartItem({
          user,
          courseInfo,
        })
      );
    }
  };

  return (
    <>
      {courseInfo?.id ? (
        <>
          <div>
            <Image
              src={courseInfo?.banner?.url}
              alt={courseInfo?.title}
              width={400}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-normal ">{courseInfo.title}</h3>
            <p className="text-md text-gray-500">{courseInfo.category}</p>
            <p className="text-md mt-2">
              {courseInfo?.description?.[0]?.children?.[0]?.text}
            </p>
            <div className="flex items-center gap-2 mt-2">
              {courseInfo?.instantDelivery ? (
                <BsPatchCheck className="w-5 h-5 text-green-500 " />
              ) : (
                <FiAlertOctagon className="w-5 h-5 text-red-500" />
              )}

              <p className="text-gray-500 text-sm">
                Eligible For Instant Delivery
              </p>
            </div>
            <p className="text-4xl mt-3 font-bold text-[var(--bg-primary)]">
              ${courseInfo.price}
            </p>
            <button
              onClick={() => handleAddToCart()}
              className="flex items-center mt-2 gap-2 bg-[var(--bg-primary)] cursor-pointer text-white px-4 py-2 text-xl rounded-md hover:bg-[var(--color-hover)]"
            >
              <CiShoppingCart className="w-6 h-6 " /> Add to cart
            </button>
          </div>
        </>
      ) : (
        <SkeletonCourseInfo />
      )}
    </>
  );
};

export default ProductInfo;
