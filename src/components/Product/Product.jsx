import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../store/CartContext.jsx";
import styles from "../Hero/HomePage.module.css";
import Button from "../Button/Button.jsx";

export default function Product({ product }) {
  const cartCtx = useContext(CartContext);

  function handleAddToCart() {
    cartCtx.addToCart(product);
  }

  return (
    <article className={styles.productCard}>
      {/* ← Solo envuelve la imagen en Link */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className={styles.productImage}
        />
      </Link>

      <div className={styles.productContent}>
        <Link to={`/product/${product.id}`}>
          <h3 className={styles.productTitle}>{product.title}</h3>
        </Link>
        <p className={styles.productPrice}>${product.price}</p>
        <p className={styles.productDescription}>{product.brand}</p>

        <Button onClick={handleAddToCart} className={styles.addToCartBtn}>
          Add to Cart
        </Button>
      </div>
    </article>
  );
}
