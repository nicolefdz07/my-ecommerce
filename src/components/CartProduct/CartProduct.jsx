import styles from './CartProduct.module.css';

export default function CartProduct({ name, quantity, price, image, onIncrease, onDecrease }) {
  return (
    <li className={styles.cartProduct}>
      <img 
        src={image} 
        alt={name} 
        className={styles.productImage}
      />
      
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.productPrice}>${price}</p>
        <p className={styles.productQuantity}>Cantidad: {quantity}</p>
      </div>
      
      <div className={styles.quantityControls}>
        <button 
          className={styles.quantityBtn}
          onClick={onDecrease}
          aria-label="Disminuir cantidad"
        >
          −
        </button>
        <span style={{ 
          minWidth: '20px', 
          textAlign: 'center', 
          fontWeight: '600',
          color: '#2d3748'
        }}>
          {quantity}
        </span>
        <button 
          className={styles.quantityBtn}
          onClick={onIncrease}
          aria-label="Aumentar cantidad"
        >
          +
        </button>
      </div>
    </li>
  )
}