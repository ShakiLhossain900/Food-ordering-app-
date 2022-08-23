import React from 'react';
const CartContext = React.createContext({
    //auto completions 
    items: [],
    totalAmount: 0,
    addItem:(item) => {},
    removeItem:(id) => {},
    clearCart: () => {},
});
export default CartContext;