import React from 'react';
import empty from "../../assets/empty.png";
import cart from "./emptycart.module.css";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className={cart.emptyCartContainer}>
        <div className={cart.emptyCart}>
          <img src={empty} alt="empty cart" />
        </div>
        <h2>Your cart is currently empty</h2>
        <p>
          Before proceed to checkout you must add some products to your shopping
          cart.
        </p>
        <p>You will find a lot of interesting products on our "Shop" page.</p>

        <Link to="/shop" className={cart.returnBtn}>RETURN TO SHOP</Link>
      </div>
  )
}

export default EmptyCart;