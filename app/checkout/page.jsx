import { Suspense } from "react";
import CheckoutContent from "../_components/CheckoutContent";
const Checkout = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
};

export default Checkout;
