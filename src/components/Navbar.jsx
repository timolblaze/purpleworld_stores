import React, { useContext, useEffect, useState } from "react";
import Logo from "../assets/purpleworldLogo.png";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import styles from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { AuthContext } from "../contexts/AuthProvider";

export default function Navbar() {
  // Various state variables to manage data for the Navbar component and its children components
  const [user, setUser] = useState();
  const [mobile, setMobile] = useState(false);
  const { cartItems } = useContext(CartContext);
  const {isAuthenticated} = useContext(AuthContext)

  // Making use of the useEffect React hook to fetch logged In or Registered users first name on initial rendering of the Navbar 
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
          {isAuthenticated ? (
            `Hey, ${user} 😎`
          ) : (
            <NavLink to="/login">Login / Register</NavLink>
          )}
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/cart">
            {" "}
            <HiOutlineShoppingBag size={42} />({cartItems ? cartItems.length : 0})
          </NavLink>
          {isAuthenticated && (
            <Link className={styles.price} to='/dashboard'>
              Dashboard
            </Link>
          )}
        </div>
      </header>
      <div className={styles.categoryDiv} />
    </div>
  );
}
