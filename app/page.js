export const revalidate = 60;
import Banner from "./_components/Banner";
import ProductSection from "./_components/productSection";
import { getAllCourses } from "./_utils/cousesApi";
export default async function Home() {
  const data = await getAllCourses();
 
  return (
    <>
      {data.length === 0 ? (
        <div className="mt-10 text-center text-gray-500">No Courses Found</div>
      ) : (
        <>
          <Banner />
          <ProductSection data={data} />
        </>
      )}
    </>
  );
}
