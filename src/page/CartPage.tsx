// Import necessary React components and hooks
import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom"; 
import Cookies from "js-cookie"; 
import "./CartPage.scss"; 
import Cart from "../components/cart/Cart"; 

const CartPage: React.FC = () => {
  const navigate = useNavigate(); 

 useEffect(() => {
    const userCookie = Cookies.get("userEmail");

    if (!userCookie) {
      navigate("/");
    }
  }, [navigate]); 

  return (
    <div className="main-container">
      <div className="navbar-container">
        <Navbar /> 
        <div className="content-container">
          <Cart /> 
        </div>
      </div>
    </div>
  );
};
export default CartPage;
