import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ShoppingCartContextProvider from "./components/Context/index.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShoppingCartContextProvider>
      <App />
    </ShoppingCartContextProvider>
  </BrowserRouter>
);
