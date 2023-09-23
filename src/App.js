import React from "react";
import Header from "./Header";
import Main from "./Main";
import "./App.css";
import Footer from "./Footer";
import Cart from "./Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./Signin";
import Register from "./Register";



function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={[<Header/>,<Main/>,<Footer/>]}/>
        <Route path="/Cart" element={[<Header/>,<Cart/>,<Footer/> ]}/>
        <Route path="/signin" element={[<Header/>,<Signin/>]}/>
        <Route path="/Register" element={[<Header/>,<Register/>]}>
          
        </Route>
      </Routes>
    </BrowserRouter>
         
    </>
  );
}

export default App;
