export const dynamic = "force-dynamic"; // This will make the page dynamic and not static
import Banner from "./_components/Banner";
import ProductSection from "./_components/productSection";
import { getAllCourses } from "./_utils/cousesApi";
export default async function Home() {
  const data = await getAllCourses();
  console.log(
    "Test Running on the server with revalidate=60 from home page..."
  );
  // console.log(data);

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
