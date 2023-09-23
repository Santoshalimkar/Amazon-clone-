import React, { useEffect } from "react";
import "./Cart.css";
import Cartitem from "./Cartitem";
import { useStatevalue } from "./StateProvider";
import Subtotal from "./Subtotal";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Emptycart from "./Emptycart";



const Cart = () => {
  const [{basket},dispatch]=useStatevalue();

  
  

  return (
    <div className="cart-container">
      <div className="left-container">
           <div className="cart-title">
             <span className="heading "><ShoppingCartIcon/>Shopping Cart</span>
           </div>
            
           <div className="cartplaced">

           {basket.length===0?<Emptycart/>:""}

           {basket.map(item=>
              <Cartitem
                id={item.id}
                img={item.img}
                desc={item.desc}
                title={item.title}
                price={item.price}
                qty={item.qty}
              />
           )}
              
             
          </div>

      </div>
      <div className="right-container">
      <Subtotal/>
      
      </div>
    </div>
  );
};

export default Cart;
