import { createContext , useReducer} from "react";

const CartContext = createContext({
  products: [],
  addToCart : ()=>{},
  removeFromCart: ()=>{},
  clearCart: ()=>{},

});

function CartReducer(state, action) {
  if (action.type === "ADD_PRODUCT") {
    const existingProductIndex = state.products.findIndex(
      (product) => product.id === action.product.id
    );

    let updatedState = [...state.products];
    if (existingProductIndex > -1) {
      const existingProduct = state.products[existingProductIndex];

      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + 1,
      };

      updatedState[existingProductIndex] = updatedProduct;
    } else {
      // si no existe el producto en el carrito
      const newProduct = {
        ...action.product,
        quantity: 1,
      };
      updatedState = [...state.products, newProduct]; // se agrega a la lista de productos
    }

    return { ...state, products: updatedState };
  }

  if (action.type === "REMOVE_PRODUCT") {
    const existingProductIndex = state.products.findIndex(
      (product) => product.id === action.product.id
    );
 

    const existingCartProduct = state.products[existingProductIndex];
    let updatedState = [...state.products];

    if (existingCartProduct.quantity === 1) {
      updatedState.splice(existingProductIndex, 1); // si solo hay uno se elimina
    } else {
      const updatedProduct = {
        ...existingCartProduct,
        quantity: existingCartProduct.quantity - 1,
      };
      updatedState[existingProductIndex] = updatedProduct; // actualizamos el producto en el carrito
    }
    return { ...state, products: updatedState };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, products: [] };
  }

  return state;
}

export function CartContextProvider({ children }){
  const [cartState, dispatchCartAction] = useReducer(CartReducer, {products: []});

  const addProduct = (product)=>{
    dispatchCartAction({type: 'ADD_PRODUCT', product});
  }
  const removeProduct = (product)=>{
    dispatchCartAction({type: 'REMOVE_PRODUCT', product})
  }
  const clearCart = ()=>{
    dispatchCartAction({type: 'CLEAR_CART'})
  }

  const cartContext = {
    products: cartState.products,
    addToCart: addProduct,
    removeFromCart: removeProduct,
    clearCart: clearCart,
  }
  console.log(cartContext)
  return <CartContext.Provider value={cartContext}>
    {children}
  </CartContext.Provider>
}

export default CartContext;