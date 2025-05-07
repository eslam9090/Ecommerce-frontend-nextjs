import axiosInstance from "./axiosConfig";

const createOrder = (data) => axiosInstance.post("/orders", data);

export default { createOrder };
