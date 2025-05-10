import { getCourseByCategory } from "../_utils/cousesApi";
import ProductList from "./productList";
export default async function CourseByCategory({ courseInfo }) {
  const category = await getCourseByCategory(courseInfo?.category);
  console.log("This is SSG Rendering for CourseByCategory page...");

  console.log(category);
  return (
    <div className=" px-10 md:px-28 py-30">
      <h2 className="mb-10 text-2xl font-bold">Similar Courses</h2>

      <ProductList data={category} />
    </div>
  );
}
