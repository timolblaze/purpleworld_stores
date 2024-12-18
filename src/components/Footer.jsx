import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/purpleworldLogo.png";
import styles from "./Footer.module.css";
import { AuthContext } from "../contexts/AuthProvider";

export default function Footer() {
  const {isAuthenticated} = useContext(AuthContext)
  
  return (
    // Footer Component styled with footer.module.css file
    <footer>
      <div className={styles.footer}>
        <div>
          <div>
            <img src={Logo} alt="PurpleWorld Logo" />
          </div>
          <p>
            Shop smart, shop savvy – your one-stop destination for all things
            trendy!
          </p>
          <ul>
            <li>Shop D 133, ElRufai Plaza, Wuse Market, Wuse, Abuja.</li>
            <li>Phone: +61 893891393</li>
            <li>support@purpleworld.shop</li>
          </ul>
        </div>
        
        <div>
          <h3>Product Categories</h3>
          <ul>
            <li>Skin Care</li>
            <li>Groceries</li>
          </ul>
        </div>
        <div>
          <h3>Links</h3>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/shop">
              <li>Shop</li>
            </Link>

            {
              isAuthenticated ? (
              <Link to="/dashboard">
                <li>Dashboard</li>
              </Link>
              ) : (
                <Link to="/login">
                  <li>Login/Register</li>
                </Link>
              )
            }

            <Link to="/cart">
              <li> Cart </li>
            </Link>
          </ul>
        </div>
      </div>
      <hr />
      <div>
        <p>Copyright &copy; 2024</p>
      </div>
    </footer>

    
  );
}
