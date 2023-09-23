import React, { useEffect, useState } from "react";
import "./Producttwo.css";
import { useStatevalue } from "./StateProvider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";



const ProductTwo = ({ id, title, img, price, desc }) => {
  const [{basket},dispatch]=useStatevalue();
  const [inCart, setInCart] = useState(false);

 
 const Addtobasket=()=>{
  dispatch({
    type:'ADD_TO_BASKET',
    item:{
      id:id,
      title:title,
      img:img,
      price:price,
      desc:desc,
    },
  });
   setInCart(true)
 };
  return (
    <div className="product-card">
      <div className="card2" style={{ width: "18rem" }}>
        <h5 className="card-title">{title}</h5>
        <img src={img} className="card-img" alt="..." />
        <div className="card-body">
          <span class="a-price-symbol">₹</span>
          <span class="a-price">{price}</span>
          <p className="card-text">{desc}</p>
          {inCart?
          <Button
            onClick={Addtobasket} disabled={inCart}
            style={{ backgroundColor: "white", color: "black",marginLeft:"45px",border:"1px solid black"}}
            variant="contained"
            startIcon={<ShoppingCartIcon />}
          >
            Added to cart
          </Button>:
          <Button
            onClick={Addtobasket} disabled={inCart}
            style={{ backgroundColor: "#ffd714", color: "black",marginLeft:"60px"}}
            variant="Contained"
            startIcon={<ShoppingCartIcon />}
          >
            Add to Cart
          </Button>
          }
        </div>
      </div>
    </div>
  );
};

export default ProductTwo;
