import React from "react";
import SingleProduct from "./singleProduct";

const ProductList = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 justify-items-center">
      {data.length > 0 ? (
        data.map((course) => <SingleProduct key={course.id} course={course} />)
      ) : (
        <div className="mt-10 text-center text-gray-500">No Courses Found</div>
      )}
    </div>
  );
};

export default ProductList;
