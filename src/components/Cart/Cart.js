import { useContext,useState } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from './Checkout'
const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartTtems = (
    // ai class ta array vitor use kroar karon of das
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const chechoutHandler = () =>{
    setIsCheckout(true);
  }

   const modalAction = (
    <div className={classes.actions}>
    <button className={classes["button-alt"]} onClick={props.onClose}>
      Close
    </button>
    {hasItems && <button className={classes.button} onClick={chechoutHandler}>Order</button>}
  </div>  
   )
  
  return (
    <Modal onClose={props.onClose}>
      {cartTtems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onclose = {props.onClose} />}
      {!isCheckout && modalAction}
  
    </Modal>
  );
};

export default Cart;
