import React, { useEffect, useState } from "react";
import Logo from "../assets/purpleworldLogo.png";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    if (localStorage.getItem("registeredUsers")) {
      const userDetails = JSON.parse(localStorage.getItem("registeredUsers"));
      const { fullName } = userDetails.user;
      setUser(fullName.split(' ')[0])
    }

    if (localStorage.getItem("loggedInUsers")) {
      const userDetails = JSON.parse(localStorage.getItem("loggedInUsers"));
      const { fullName } = userDetails.user;
      setUser(fullName.split(' ')[0])
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
          {user ? `Hey, ${user} 😎`   : <Link to="/login">Login / Register</Link>}
          <Link to="/shop">Shop</Link>
          <Link to="/cart">
            {" "}
            <HiOutlineShoppingBag size={42} />{" "}
          </Link>
          <p className={styles.price}> $0.00</p>
        </div>
      </header>
      <div className={styles.categoryDiv} />
    </div>
  );
}
