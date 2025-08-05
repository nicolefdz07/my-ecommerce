import { useEffect, useState } from "react";
import { getFashionProducts } from "../../services/api";
import styles from "../Hero/HomePage.module.css"; 
import Product from "../Product/Product.jsx";


export default function Products(){
const [products, setProducts] = useState([])
const [isLoading, setIsLoading] = useState(false)  
  
useEffect(()=>{
    const fetchProducts = async ()=>{
      setIsLoading(true)  
      const data = await getFashionProducts() // Usando la nueva función
      console.log('Productos de moda obtenidos:', data.length);
      setProducts(data)
      setIsLoading(false)  
    };
    fetchProducts();
  }, [])

  return (
    <div className={styles.productsGrid}>
      {isLoading && <div>Cargando productos...</div>}
      {!isLoading && products.map((product)=>(
        <Product key={product.id} product={product} />
      ))}
    </div>
  )

}