const { default: axiosInstance } = require("./axiosConfig");

const addToCartItems = (data) => axiosInstance.post("/carts", data);
const getCartsByEmail = (email) =>
  axiosInstance.get(
    `/carts?populate[courses][populate]=banner&filters[email][$eq]=${email}`
  );
const updateQuantity = (id, data) => axiosInstance.put(`/carts/${id}`, data);
const deleteCartItem = (id) => axiosInstance.delete(`/carts/${id}`);

export default {
  addToCartItems,
  getCartsByEmail,
  updateQuantity,
  deleteCartItem,
};
