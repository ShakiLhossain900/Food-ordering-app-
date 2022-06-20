import React, { useContext, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
import { useEffect } from "react";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] =useState(false)
  const cartCtx = useContext(CartContext);

  const {items} =cartCtx;
  const numberOfCartItems = items.reduce((CurNumber, item) => {
    return CurNumber + item.amount;
  },0);
  const btnClasses =`${classes.button} ${btnIsHighlighted ? classes.bump : ''}`
  
  useEffect(() => {
    if(items.length === 0){
      return;
    }
    setBtnIsHighlighted(true)

    const timer =setTimeout(() =>{
      setBtnIsHighlighted(false);
    }, 300);
    //useeffect vitor kono function return korle ata auto matic bole clean up function 
    // cleanup funciotn inside useEffect er vitor kiso likhle it could be clean up
    return () =>{
       clearTimeout(timer);
    }
  },[items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
