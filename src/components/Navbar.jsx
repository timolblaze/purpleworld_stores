import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/purpleworldLogo.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

export default function Navbar() {
  const [user, setUser] = useState();
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    if (localStorage.getItem("registeredUsers")) {
      const userDetails = JSON.parse(localStorage.getItem("registeredUsers"));
      const { fullName } = userDetails.user;
      setUser(fullName.split(" ")[0]);
    }

    if (localStorage.getItem("loggedInUsers")) {
      const userDetails = JSON.parse(localStorage.getItem("loggedInUsers"));
      const { fullName } = userDetails.user;
      setUser(fullName.split(" ")[0]);
    }
  }, []);

  return (
    <div>
      <header>
        <Link to="/" className={styles.logoCtn}>
          <img src={Logo} />
        </Link>
        <div className={styles.searchbarCtn}>
          <input type="search" />
        </div>

        <div className={styles.cartDiv}>
          {user ? (
            `Hey, ${user} 😎`
          ) : (
            <NavLink to="/login">Login / Register</NavLink>
          )}
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/cart">
            {" "}
            <HiOutlineShoppingBag size={42} />({cartItems.length})
          </NavLink>
          <p className={styles.price}> $0.00</p>
        </div>
      </header>
      <div className={styles.categoryDiv} />
    </div>
  );
}
