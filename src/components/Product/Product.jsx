import styles from '../Hero/HomePage.module.css';
import CartContext from '../../store/CartContext';
import Button from '../Button/Button.jsx';
import { useContext } from 'react';



export default function Product({ product }) {
  const cartCtx = useContext(CartContext);

  const addProductToCart = ()=>{
    cartCtx.addToCart(product);
    console.log('Producto agregado:', product.title);
    console.log('Productos en carrito:', cartCtx.products);
  }
  
  return (
    <div className={styles.productCard}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className={styles.productImage}
      />
      <h3 className={styles.productTitle}>{product.title}</h3>
      <p className={styles.productPrice}>${product.price}</p>
      <p className={styles.productDescription}>{product.description}</p>
      <Button 
        variant="secondary"
        onClick={addProductToCart}
      >
        Add to cart
      </Button>
    </div>
  );
}
