import { useContext } from "react";
import UserProgressContext from "../../store/UserProgressContext.jsx";
import Button from "../Button/Button.jsx";
import Modal from "../Modal/Modal.jsx";
import styles from "./Cart.module.css";
import CartContext from "../../store/CartContext.jsx";
import CartProduct from "../CartProduct/CartProduct.jsx";

export default function Cart() {
  const userProgressCtx = useContext(UserProgressContext);
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.products.reduce((totalPrice, product) => {
    return totalPrice + product.price + product.quantity;
  }, 0);

  const handleCloseCart = () => {
    userProgressCtx.hideCart();
  };
  

  // const handleGoCheckOut = ()=>{
  //   userProgressCtx.showCheckout();
  // }

  return (
    <Modal
      open={userProgressCtx.progress === "cart"}
      onClose={handleCloseCart}
      title="🛒 Shopping Cart"
    >
      <div className={styles.cart}>
        {!cartCtx.products.length && <div className={styles.emptyCartIcon}>🛒</div>}
        {!cartCtx.products.length && <p className={styles.emptyMessage}>Your cart is empty</p>}
        {!cartCtx.products.length && <p>¡Add some incredible products to begin!</p>}
        {/* aqui se mostraran los productos del carrito */}
        <ul>
          {cartCtx.products.map((product)=>(
          <CartProduct key={product.id}
          image={product.thumbnail}
          name={product.title}
          quantity={product.quantity}
          price={product.price}
          onIncrease={()=> cartCtx.addToCart(product)}
          onDecrease={()=> cartCtx.removeFromCart(product)}
          />
          ))}
        </ul>
        <p>Total: ${cartTotal.toFixed(2)}</p>
        <div className={styles.cartActions}>
          <Button 
          onClick={cartCtx.clearCart}
          variant="primary" size="large">
            Clean Cart
          </Button>
          {cartCtx.products.length > 0 && <Button

           variant="primary" size="large" onClick={handleCloseCart}>
            💳 Go to Checkout
          </Button>}

        </div>
      </div>
    </Modal>
  );
}
