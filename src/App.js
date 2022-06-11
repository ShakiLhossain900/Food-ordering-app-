 import { Fragment,useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {
  const [cartShown, setcartShown] = useState(false);

  const showCartHandler =()=>{
    setcartShown(true);
  }
  
  const hideCartHandler =()=>{
    setcartShown(false);
  }
  return (
    <Fragment>
     { cartShown && <Cart onClose ={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
