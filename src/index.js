import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/app";
import "./base/index.css";
import en from "./lang/english.json";
import ru from "./lang/russion.json";
import uz from "./lang/uzbek.json";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CartContext from "./context/context";
const root = ReactDom.createRoot(document.getElementById("root"));
i18next.use(initReactI18next).init({
  lng: "ru",
  debug: true,
  resources: {
    en: {
      translation: en,
    },
    ru: {
      translation: ru,
    },

    uz: {
      translation: uz,
    },
  },
});
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContext>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </CartContext>
    </BrowserRouter>
  </React.StrictMode>
);
