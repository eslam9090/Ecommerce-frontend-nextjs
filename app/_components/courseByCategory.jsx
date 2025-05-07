import getCourseByCategory from "../_utils/cousesApi";
import ProductList from "./productList";
export default async function CourseByCategory({ courseInfo }) {
  try {
    const res = await getCourseByCategory.getCourseByCategory(
      courseInfo?.category
    );
    const category = res?.data?.data;

    return (
      <div className=" px-10 md:px-28 py-30">
        <h2 className="mb-10 text-2xl font-bold">Similar Courses</h2>

        <ProductList data={category} />
      </div>
    );
  } catch (error) {
    throw error;
  }
}
