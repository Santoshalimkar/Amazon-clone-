import React from "react";
import logo from "./Asset/logo.png";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link} from "react-router-dom";
import { useStatevalue } from "./StateProvider";
import LogoutIcon from '@mui/icons-material/Logout';



export default function Header() {
  const [{basket,user},dispatch]=useStatevalue();

 
  const Authhandle=()=>{
    dispatch({
      type:"REMOVE_USER"
      
    })

  }
  


  return (
    <div className="header">
    <Link to="/">

      <img className="logo" src={logo} alt="logo" />
    </Link>
      <div className="header-search">
        <input className="header-input" type="text" />
        <SearchIcon className="searchicon" />
      </div>
      <div className="header-nav">
      <Link to={!user && '/signin'}>
        <div className="navlist" onClick={Authhandle} >
          <span className="nav-list-1">{user?`Hello,${user}`:'Hello Guest'}</span>
          <span className="nav-list-2">{user?<LogoutIcon/>:'Sign in'}</span>
        </div>
      </Link>
        <div className="navlist">
          <span className="nav-list-1">Returns &</span>
          <span className="nav-list-2">Orders</span>
        </div>
        <div className="navlist">
          <span className="nav-list-1">Your</span>
          <span className="nav-list-2">Prime</span>
        </div> 
  
          <div className="cart">
          <span className="badge rounded-pill bg-warning text-dark">{basket.length}</span>
           <Link to="/Cart">
          <ShoppingCartIcon className="carticon" />
           </Link>
        </div>
      </div>
    </div>
  );
}
