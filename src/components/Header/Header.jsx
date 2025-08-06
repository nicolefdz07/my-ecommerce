import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import UserProgressContext from "../../store/UserProgressContext.jsx";
import styles from "./Header.module.css";
import { useRef } from "react";
import SearchContext from "../../store/SearchContext.jsx";

export default function Header() {
  // const { query, handleChangeQuery, fetchSearchProducts } = useSearchProducts();
  const userProgressCtx = useContext(UserProgressContext);
  const {query, fetchSearchProducts, handleChangeQuery} = useContext(SearchContext);
  const input = useRef(null);

  function handleShowCart() {
    userProgressCtx.showCart();
  }
  

  return (
    <header className={styles.header}>
      <h1>LOGO</h1>
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
