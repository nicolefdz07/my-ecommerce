import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import UserProgressContext from "../../store/UserProgressContext.jsx";
import styles from "./Header.module.css";
import { useRef } from "react";
import SearchContext from "../../store/SearchContext.jsx";

export default function Header() {
  const userProgressCtx = useContext(UserProgressContext);
  const {query, fetchSearchProducts, handleChangeQuery} = useContext(SearchContext);
  const input = useRef(null);

  function handleShowCart() {
    userProgressCtx.showCart();
  }
  

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span className={styles.logoText}>ShopHub</span>
      </div>
      <div className={styles.searchContainer}>
        <input 
          type="text" 
          placeholder="Search for products..." 
          ref={input}
          onChange={handleChangeQuery}
          value={query}
          className={styles.searchInput}
        />
        <button 
          onClick={() => fetchSearchProducts()}
          className={styles.searchButton}
          aria-label="Search products"
        >
          <FontAwesomeIcon icon="search" />
        </button>
      </div>
      <button onClick={handleShowCart} className={styles.cartButton}>
        <FontAwesomeIcon icon="shopping-cart" />
        Cart
      </button>
    </header>
  );
}

