 import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";
function App() {
  const [cartShown, setcartShown] = useState(false);

  const showCartHandler =()=>{
    setcartShown(true);
  }
  
  const hideCartHandler =()=>{
    setcartShown(false);
  }
  return (
    <CartProvider>
     { cartShown && <Cart onClose ={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
