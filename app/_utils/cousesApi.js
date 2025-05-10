// import axiosInstance from "./axiosConfig";
// const getAllCourses = () => axiosInstance.get("/courses?populate=*");
// const getCourseById = (id) => axiosInstance.get(`/courses/${id}?populate=*`);
// const getCourseByCategory = (categoryName) =>
//   axiosInstance.get(
//     `/courses?filters[category][$eq]=${categoryName}&populate=*`
//   );

const url = process.env.NEXT_PUBLIC_API_URL;

export const getAllCourses = async () => {
  try {
    const res = await fetch(`${url}/courses?populate=*`, {
      next: {
        revalidate: 60,
      },
    });
    if (!res.ok) {
      throw new Error(`Fetch failed with status: ${res.status}`);
    }
    const data = await res.json();
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getCourseById = async (id) => {
  try {
    const res = await fetch(`${url}/courses/${id}?populate=*`, {
      cache: "force-cache",
    });
    if (!res.ok) {
      throw new Error(`Fetch failed with status: ${res.status}`);
    }
    const data = await res.json();
    return data?.data;
  } catch (error) {
    throw error;
  }
};

export const getCourseByCategory = async (categoryName) => {
  try {
    const res = await fetch(
      `${url}/courses?filters[category][$eq]=${categoryName}&populate=*`
    );
    if (!res.ok) {
      throw new Error(`Fetch failed with status: ${res.status}`);
    }
    const data = await res.json();
    return data?.data;
  } catch (error) {
    throw error;
  }
};

// const getCourseById = (id) =>
//   fetch(`${url}/courses/${id}?populate=*`).then((response) => response.json());

// const getCourseByCategory = (categoryName) =>
//   fetch(
//     `${url}/courses?filters[category][$eq]=${categoryName}&populate=*`
//   ).then((response) => response.json());
// export default { getAllCourses, getCourseById, getCourseByCategory };
