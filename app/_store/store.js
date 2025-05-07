const { configureStore } = require("@reduxjs/toolkit");
import cartSlice from "../_cartSlices/cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default store;
