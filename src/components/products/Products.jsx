import { useContext, useEffect, useState } from "react";
import { getFashionProducts } from "../../services/api";
import styles from "../Hero/HomePage.module.css"; 
import Product from "../Product/Product.jsx";
import SearchContext from "../../store/SearchContext.jsx";




export default function Products(){
  const { results} = useContext(SearchContext); // Obteniendo los resultados de búsqueda del contexto
const [products, setProducts] = useState([])
const [isLoading, setIsLoading] = useState(false)  




useEffect(()=>{
    const fetchProducts = async ()=>{
      setIsLoading(true)  
      const data = await getFashionProducts() 
      console.log('Productos de moda obtenidos:', data.length);
      setProducts(data)
      setIsLoading(false)  
    };
    fetchProducts();
  }, [])

  useEffect(()=>{
    console.log('useEffect results ejecutado:', results); 
      if(results.length > 0){
  
      setProducts(results);
      console.log('Productos actualizados con resultados de búsqueda:', results);
      }
    }, [results])

 

  return (
    <div className={styles.productsGrid}>
      {isLoading && <div>Cargando productos...</div>}
      {!isLoading &&  products.map((product)=>(
        <Product key={product.id} product={product} />
      ))}
    </div>
  );

}