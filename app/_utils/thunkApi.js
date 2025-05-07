const { createAsyncThunk } = require("@reduxjs/toolkit");
import { toast } from "sonner";
import cartApi from "./cartApi";

export const addOrUpdateCartItem = createAsyncThunk(
  "cart/addOrUpdateCartItem",
  async ({ user, courseInfo }, { rejectWithValue }) => {
    try {
      const email = user?.emailAddresses[0]?.emailAddress;
      if (!email) {
        return;
      }
      const res = await cartApi.getCartsByEmail(email);
      const itemsInCartByEmail = res?.data?.data;
      const existingItem = itemsInCartByEmail.find(
        (item) => item.courses[0].documentId === courseInfo?.documentId
      );

      const data = {
        data: {
          username: user?.fullName,
          email: user?.emailAddresses[0]?.emailAddress,
          quantity: 1,
          courses: [courseInfo?.documentId],
        },
      };
      if (existingItem) {
        await cartApi.updateQuantity(existingItem.documentId, {
          data: {
            quantity: existingItem.quantity + 1,
          },
        });
        toast.success("Item Added to cart successfully!");
        return {
          id: existingItem.courses[0].documentId,
          quantity: existingItem.quantity + 1,
        };
      } else {
        const newItem = await cartApi.addToCartItems(data);
        toast.success("New Item Added to cart successfully!");
        return newItem.data.data;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateCartItemQuantity = createAsyncThunk(
  "cart/updateCartItemQuantity",
  async ({ id, quantity }, { rejectWithValue }) => {
    try {
      if (quantity <= 0) {
        await cartApi.deleteCartItem(id);
      } else {
        await cartApi.updateQuantity(id, {
          data: {
            quantity: quantity,
          },
        });
      }

      return { id, quantity };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async (id, { rejectWithValue }) => {
    try {
      const res = await cartApi.deleteCartItem(id);

      //   alert("Item deleted successfully!");
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
