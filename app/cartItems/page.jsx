"use client";
import { useUser } from "@clerk/nextjs";
import getCartsByEmail from "../_utils/cartApi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../_cartSlices/cartSlice";
import CartInfo from "../_components/cartInfo";

const CartItems = () => {
  const { user } = useUser();

  const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    if (user) {
      handelCartItems();
    }
  }, [user]);
  const dispatch = useDispatch();

  const handelCartItems = async () => {
    try {
      const email = user?.emailAddresses[0]?.emailAddress;
      if (!email) {
        return;
      }

      const res = await getCartsByEmail.getCartsByEmail(email);
      dispatch(getCartItems(res?.data?.data));
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <CartInfo cartItems={cartItems} />
    </div>
  );
};

export default CartItems;
