const createSlice = require("@reduxjs/toolkit").createSlice;
import { addOrUpdateCartItem, deleteCartItem } from "../_utils/thunkApi";
import { updateCartItemQuantity } from "../_utils/thunkApi";
import { toast } from "sonner";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalPrice: 0,
    status: "idle",
    totalQuantity: 0,
  },
  reducers: {
    getCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    getTotal: (state) => {
      state.totalPrice = state.cartItems.reduce((acc, item) => {
        return acc + item.courses[0].price * item.quantity;
      }, 0);
      state.totalQuantity = state.cartItems.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addOrUpdateCartItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addOrUpdateCartItem.fulfilled, (state, action) => {
        state.status = "succeeded";

        if (action.payload.quantity) {
          const item = state.cartItems.find(
            (item) => item.documentId === action.payload.id
          );
          if (item) {
            item.quantity = action.payload.quantity;
            toast("Toast");
          }
        } else {
          state.cartItems.push(action.payload);
        }
      })
      .addCase(addOrUpdateCartItem.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        state.status = "succeeded";

        const item = state.cartItems.find(
          (item) => item.documentId === action.payload.id
        );
        if (item) {
          if (action.payload.quantity === 0) {
            state.cartItems = state.cartItems.filter(
              (item) => item.documentId !== action.payload.id
            );
          }
          item.quantity = action.payload.quantity;
        }
      })
      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cartItems = state.cartItems.filter(
          (item) => item.documentId !== action.payload
        );
      });
  },
});
export const { getCartItems, getTotal } = cartSlice.actions;
export default cartSlice.reducer;
