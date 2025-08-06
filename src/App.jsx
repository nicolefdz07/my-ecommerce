import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import styles from "./App.module.css";
import Root from "./layout/Root";
import HomePage from "./pages/HomePage.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";
import { SearchProvider } from "./store/SearchContext.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="product/:id" element={<ProductDetail />} />
    </Route>
  )
);
function App() {
  return (
    <div className={styles.gridContainer}>
      <SearchProvider>
        <CartContextProvider>
          <UserProgressContextProvider>
            <RouterProvider router={router} />
          </UserProgressContextProvider>
        </CartContextProvider>
      </SearchProvider>
    </div>
  );
}

export default App;
