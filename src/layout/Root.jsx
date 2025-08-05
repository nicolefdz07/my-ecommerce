import { Outlet } from "react-router-dom";
import Cart from "../components/CartComponent/Cart";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Root() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Cart />
      <Footer />
    </div>
  );
}
