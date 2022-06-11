import React from "react";
import Modal from "../UI/Modal";

import classes from './Cart.module.css'

const Cart = (props) => {
  const cartTtems = (
    // ai class ta array vitor use kroar karon of das
    <ul className={classes['cart-items']}>  
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartTtems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.action}>
        <button>Close</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
