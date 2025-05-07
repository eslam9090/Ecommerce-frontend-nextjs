"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import store from "../_store/store";

export default function StoreProvider({ children }) {
  return (
    <ClerkProvider>
      <Provider store={store}>
        {children}
        <Toaster />
      </Provider>
    </ClerkProvider>
  );
}
