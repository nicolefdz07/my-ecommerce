import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import UserProgressContext from "../../store/UserProgressContext.jsx";
import styles from "./Header.module.css";

export default function Header() {
  const userProgressCtx = useContext(UserProgressContext);

  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header className={styles.header}>
      <h1>LOGO</h1>
      <input type="text" placeholder="Search for products..." />
      <button onClick={handleShowCart}>
        <FontAwesomeIcon icon="shopping-cart" />
        Cart
      </button>
    </header>
  );
}
