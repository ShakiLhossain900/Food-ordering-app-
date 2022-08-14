 //when the time for code i have to do manually insert the data in the firebase and start work
 //than need to do recheck module 17 introduction agian and start code with this
 //working on backend database firebase 
 //try to change the available meal to manul meal in firebase
 // module 17 after completed should start module 18
 //start working 
 //
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
