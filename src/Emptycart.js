import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link} from "react-router-dom";
import "./Empty.css"
import Button from "@mui/material/Button";




const Emptycart = () => {
  return (
    <div className='emptycard text-center'>
     <h3>Your Shopping Cart is Empty</h3>
     <div className="emptyicon">
     </div>
     <div className="gotoproduct">
     <Link to="/">
     <Button
            style={{ backgroundColor: "#ffd714", color: "black",marginLeft:"45px"}}
            variant="Contained"
            startIcon={<AddShoppingCartIcon />}
          >
            Add Product
          </Button>
     </Link>
     </div>


    </div>
  )
}

export default Emptycart