import axiosInstance from "./axiosConfig";

const getAllCourses = () => axiosInstance.get("/courses?populate=*");
const getCourseById = (id) => axiosInstance.get(`/courses/${id}?populate=*`);
const getCourseByCategory = (categoryName) =>
  axiosInstance.get(
    `/courses?filters[category][$eq]=${categoryName}&populate=*`
  );
export default { getAllCourses, getCourseById, getCourseByCategory };
