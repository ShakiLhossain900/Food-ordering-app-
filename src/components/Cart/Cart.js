import {useContext} from "react";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';
import CartContext from "../../store/cart-context"
const Cart = (props) => {
  const cartCtx =useContext(CartContext)

  const totalAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartTtems = (
    // ai class ta array vitor use kroar karon of das
    <ul className={classes['cart-items']}>  
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartTtems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']} onClick={props.onClose} >Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
