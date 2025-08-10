import { useContext, useEffect, useState } from "react";
import { getFashionProducts } from "../../services/api";
import styles from "../Hero/HomePage.module.css";
import Product from "../Product/Product.jsx";
import SearchContext from "../../store/SearchContext.jsx";

export default function Products() {
  const { results, updateProductsInContext, filteredProducts } =
    useContext(SearchContext);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const data = await getFashionProducts();
      updateProductsInContext(data);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (results.length > 0) {
      updateProductsInContext(results);
    }
  }, [results, updateProductsInContext]);

  return (
    <div className={styles.productsGrid}>
      {isLoading && <div>Loading products...</div>}
      {!isLoading &&
        filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
}
