// app/course/[courseId]/page.jsx
import getCourseById from "../../_utils/cousesApi";
import BreadCrumb from "../../_components/breadCrumb";
import ProductInfo from "../../_components/productInfo";
import CourseByCategory from "../../_components/courseByCategory";

export const generateMetadata = async ({ params }) => {
  try {
    const { courseId } = await params;
    const res = await getCourseById.getCourseById(courseId);
    const courseInfo = res?.data?.data;
    return {
      title: {
        default: courseInfo?.title,
      },
      description: courseInfo?.description?.[0]?.children?.[0]?.text,
    };
  } catch (error) {
    return {
      title: "Error Loading Course",
      description: "Failed to load course details",
    };
  }
};

export default async function CourseDetails({ params }) {
  try {
    const { courseId } = await params;
    const response = await getCourseById.getCourseById(courseId);
    const courseInfo = response?.data?.data;

    if (!courseInfo) {
      return <div className="text-center py-10"> Details Not Available</div>;
    }

    return (
      <div>
        <BreadCrumb />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-10 md:px-28 py-30">
          <ProductInfo courseInfo={courseInfo} />
        </div>
        <CourseByCategory courseInfo={courseInfo} />
      </div>
    );
  } catch (error) {
    throw error;
  }
}
