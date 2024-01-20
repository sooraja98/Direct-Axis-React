// Import necessary React components and hooks
import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom"; 
import Cookies from "js-cookie"; 
import "./CartPage.scss"; 
import Cart from "../components/cart/Cart"; 

const CartPage: React.FC = () => {
  const navigate = useNavigate(); 

  // useEffect hook to check if the user is authenticated (has a valid user cookie)
  useEffect(() => {
    const userCookie = Cookies.get("userEmail"); // Retrieve user email from cookie

    // If no user cookie is found, navigate the user to the login page
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
