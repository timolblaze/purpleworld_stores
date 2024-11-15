import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import process from "./Process.module.css";
import { Link, useLocation } from "react-router-dom";

const Process = () => {
  // Retrieving the current page location of the website using the useLocation React hook
  const location = useLocation();

  /* the function to modify the Link elements by checking if the current page location matches the link 
      and then attach a class to the Link element
  */
  const getLinkClassName = (path) => {
    const isActive = location.pathname === path;
    return location.pathname === path ? process.activeLink : "";
  };

  return (
    <main className={process.body}>
      <div className={process.bodyLinks}>
        <Link to="/cart" className={getLinkClassName("/cart")}>
          SHOPPING CART
        </Link>
        <BsArrowRight style={{ fontSize: "20px", color: "#808080" }} />
        <Link to="/checkout" className={getLinkClassName("/checkout")}>
          CHECKOUT
        </Link>
      </div>
    </main>
  );
};

export default Process;
