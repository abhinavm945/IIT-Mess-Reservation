import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { CartProvider } from "./context/cardcontext.jsx";
// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
// import { ClerkProvider } from "@clerk/clerk-react";

// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key");
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY}> */}
      <App />
      {/* </ClerkProvider> */}
    </CartProvider>
  </React.StrictMode>
);
