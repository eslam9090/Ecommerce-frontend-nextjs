export const metadata = {
  title: "Cart Items",
  description: "Check out the items in your cart and proceed to checkout.",
};

export default function CartItemsLayout({ children }) {
  return (
    <div>
      <main className="p-4">{children}</main>
    </div>
  );
}
