import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext"; 

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
  </BrowserRouter>
);
