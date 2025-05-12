import createOrder from "../../_utils/orderApi";
import deleteCartItem from "../../_utils/cartApi";
import { useUser } from "@clerk/nextjs";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { data } from "autoprefixer";
import { useState } from "react";
import { useSelector } from "react-redux";

const CheckoutForm = ({ amount }) => {
  const { user } = useUser();

  const { cartItems } = useSelector((state) => state.cart);

  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const handleError = (error) => {
      setLoading(false);
      setErrorMessage(error.message);
    };
    handelCreateOrder();
    sendEmail();
    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError) {
      handleError(submitError);
      return;
    }
    const res = await fetch("api/create-intent", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
      }),
    });
    const data = await res.json();

    if (!res.ok || !data.clientSecret) {
      throw new Error("Failed to retrieve clientSecret");
    }

    const clientSecret = data.clientSecret;

    const result = await stripe.confirmPayment({
      clientSecret,
      elements,
      confirmParams: {
        return_url:
          "https://ecommerce-frontend-nextjs-gftz.vercel.app/confirmation-payment",
      },
    });

    if (result.error) {
    } else {
    }
  };

  const handelCreateOrder = async () => {
    const data = {
      data: {
        email: user?.emailAddresses[0]?.emailAddress,
        username: user?.fullName,
        amount: amount,
        courses: cartItems.map((item) => item.courses[0].documentId),
      },
    };

    try {
      const res = await createOrder.createOrder(data);

      if (res) {
        const cartItemIds = cartItems.map((item) => item.documentId);
        for (const id of cartItemIds) {
          try {
            await deleteCartItem.deleteCartItem(id);
          } catch (error) {
            throw error;
          }
        }
      }
    } catch (error) {
      throw error;
    }
  };
  const sendEmail = async () => {
    const res = await fetch("api/send", {
      method: "POST",
      body: JSON.stringify({
        amount: amount,
        email: user.primaryEmailAddress.emailAddress,
        fullName: user.fullName,
      }),
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="px-15 py-10 ">
        <PaymentElement />
        <button
          disabled={!stripe}
          className="bg-[var(--bg-primary)] cursor-pointer hover:bg-[var(--color-hover)] text-white font-semibold  px-6 py-2 mt-5 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default CheckoutForm;
