import { useContext, useEffect, useState, useCallback } from "react";
import SearchContext from "../../store/SearchContext";
import styles from "./Filters.module.css";

export default function Filters() {
  const { products, updateFilteredProducts } = useContext(SearchContext);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
    
  });

  const handleChangePriceRange = (event) => {
    const newPriceRange = event.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      minPrice: newPriceRange
    }));
  };  

  const handleChangeCategory = (event)=>{
    const newCategory = event.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: newCategory
    }));

  }

  const filterProducts = useCallback((products) => {
    return products.filter((product) => {
      return (product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  }, [filters]);

  useEffect(() => {
    const filtered = filterProducts(products);  
    updateFilteredProducts(filtered);
    console.log('Productos filtrados:', filtered);
  }, [filters]);

  return (
    <section className={styles.filters}>
      <h2> Filters</h2>
      
      <div className={styles.filterGroup}>
        <label className={styles.filterLabel} htmlFor="price">
           Price
        </label>
        <input 
          type="range" 
          id="price" 
          min="0" 
          max="5000" 
          step="10" 
          value={filters.minPrice} 
          onChange={handleChangePriceRange}
          className={styles.priceRange}
        />
        <span className={styles.priceValue}>${filters.minPrice}</span>
      </div>

      <div className={styles.filterGroup}>
        <label className={styles.filterLabel} htmlFor="category">
           Category
        </label>
        <select
          id="category"
          value={filters.category}
          onChange={handleChangeCategory}
          className={styles.categorySelect}
        >
          <option value="all"> All</option>
          <option value="beauty"> Beauty</option>
          <option value="fragrances"> Fragances</option>
          <option value="laptops"> Laptops</option>
          <option value="smartphones"> Smartphones</option>
          <option value="womens-dresses"> Dresses</option>
          <option value="mens-shirts"> Men Shirts</option>
        </select>
      </div>
    </section>
  );
}
