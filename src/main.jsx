import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// FontAwesome configuration
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// Add icons to the library
library.add(faShoppingCart);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
