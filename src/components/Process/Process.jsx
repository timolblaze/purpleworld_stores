import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import process from "./Process.module.css";
import { Link, useLocation } from "react-router-dom";

const Process = () => {
  const location = useLocation();

  const getLinkClassName = (path) => {
    const isActive = location.pathname === path;
  console.log(`Path: ${path}, Active: ${isActive}`);
    return location.pathname === path ? process.activeLink : "";
  };

  return (
    <main className={process.body}>
      <div className={process.bodyLinks}>
        <Link to="/cart" className={getLinkClassName("/cart")}>SHOPPING CART</Link>
        <BsArrowRight style={{fontSize: "20px", color: "#808080"}} />
        <Link to="/checkout" className={getLinkClassName("/checkout")}>CHECKOUT</Link>
        <BsArrowRight style={{fontSize: "20px", color: "#808080"}}/>
        <Link to="/order" className={getLinkClassName("/order")}>ORDER COMPLETE</Link>
      </div>
    </main>
  );
};

export default Process;
