import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/purpleworldLogo.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

export default function Navbar() {
  const [user, setUser] = useState();
  const [mobile, setMobile] = useState(false);
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

  function handleLogOut() {
    localStorage.removeItem("registeredUsers");
    localStorage.removeItem("loggedInUsers");
    setUser(null);
  }

  return (
    <div>
      <header className={mobile ? styles.mobile : ''}>
        <Link to="/" className={styles.logoCtn}>
          <img src={Logo} />
        </Link>

        <div className={styles.icons}>
          {mobile ? (
            <IoMdClose size={35} onClick={() => setMobile(false)}/>
          ) : (
            <FaBars size={28} onClick={() => setMobile(true)} />
          )}
        </div>
        <div className={styles.searchbarCtn}>
          <input type="search" />
        </div>
        <div className={mobile ? `${styles.cartDiv} ${styles.mobile}` : `${styles.cartDiv}`}>
          {user ? (
            `Hey, ${user} 😎`
          ) : (
            <NavLink to="/login">Login / Register</NavLink>
          )}
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/cart">
            {" "}
            <HiOutlineShoppingBag size={42} />({cartItems ? cartItems.length : 0})
          </NavLink>
          {user && (
            <p className={styles.price} onClick={handleLogOut}>
              {" "}
              Logout{" "}
            </p>
          )}
        </div>
      </header>
      <div className={styles.categoryDiv} />
    </div>
  );
}
