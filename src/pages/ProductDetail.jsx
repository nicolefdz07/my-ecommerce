import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button/Button";
import { getProductById } from "../services/api";
import CartContext from "../store/CartContext";
import styles from "./ProductDetail.module.css";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      const productData = await getProductById(id);
      setProduct(productData);
      console.log("product saved", productData);
      setIsLoading(false);
    };
    fetchProduct();
  }, [id]);

  if(isLoading) {
    return <div>Loading product details...</div>;
  }

  return (
    <section className={styles.productDetail}>
      <h1 className={styles.title}>{product && product.title}</h1>
      <img
        src={product && product.thumbnail}
        alt={product && product.title}
        className={styles.productImage}
      />
      <p className={styles.price}>
        Price <strong>${product && product.price}</strong>
      </p>
      <p className={styles.brand}>
        <strong>Brand:</strong> {product && product.brand}
      </p>
      <p className={styles.description}>{product && product.description}</p>

      <div className={styles.rating}>
        <strong>Rating:</strong>
        <div className={styles.starsWrapper}>
          {"★".repeat(Math.floor(product && product.rating))}
          {"☆".repeat(5 - Math.floor(product && product.rating))}
        </div>
        <span className={styles.ratingNumber}>
          ({product && product.rating})
        </span>
      </div>

      <div className={styles.buttonGroup}>
        <Button onClick={() => addToCart(product)} className={styles.addButton}>
          Add to Cart
        </Button>
        <Link to={`/`} className={styles.goBackButton}>
          Go to Products
        </Link>
      </div>
    </section>
  );
}
