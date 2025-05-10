import { getAllCourses, getCourseById } from "../../_utils/cousesApi";
import BreadCrumb from "../../_components/breadCrumb";
import ProductInfo from "../../_components/productInfo";
import CourseByCategory from "../../_components/courseByCategory";

export const generateStaticParams = async () => {
  const allCourses = await getAllCourses();
  return allCourses?.map((course) => ({
    courseId: course.documentId.toString(),
  }));
};

export const generateMetadata = async ({ params }) => {
  try {
    const { courseId } = await params;
    const courseInfo = await getCourseById(courseId);
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
// SYNC comunity
// Entreprenelle hub
// yalla markting
// EGY Marketers & Advertisers
export default async function CourseDetails({ params }) {
  try {
    const { courseId } = params;
    const courseInfo = await getCourseById(courseId);
    console.log("This is SSG Rendering from CourseDetails page...");
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
