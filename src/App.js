 //when the time for code i have to do manually insert the data in the firebase and start work
 //than need to do recheck module 17 introduction agian and start code with this
 //exam is going on thats why the code is not running on
 //after finish the exam in 14 i will be do unlimitated code inshaallah
 // after done module 17 i will start module 18 
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
