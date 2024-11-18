import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import DarkBG from "../../components/DarkBG";
import Footer from "../../components/Footer";
import styles from "./Dashboard.module.css";
import { AuthContext } from "../../contexts/AuthProvider";
import axios from "axios";

export default function Dashboard() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [accessToken, setAccessToken] = useState("");
  const [userID, setUserID] = useState("");
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (
      localStorage.getItem("registeredUsers") ||
      localStorage.getItem("loggedInUsers")
    ) {
      const userdetails = JSON.parse(localStorage.getItem("loggedInUsers"));
      setAccessToken(userdetails.accessToken);
      setUserID(userdetails.user._id);
    }
  }, []);

  useEffect(() => {
    // Check if accessToken is available before making the request
    if (accessToken) {
      axios
        .get(
          `https://purpleworld-be-p5y6.onrender.com/api/v1/orders?user=${userID}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => {
          const data = res.data.data;
          setOrders(data.orders); 
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            console.log("Invalid token");
            // Handle token invalidation (e.g., log the user out)
            localStorage.removeItem("loggedInUsers");
            setIsAuthenticated(false);
          } else {
            console.log("An error occurred:", error.message);
          }
        });
    }
  }, [accessToken]);

  function handleLogOut() {
    if (isAuthenticated) {
      localStorage.removeItem("registeredUsers");
      localStorage.removeItem("loggedInUsers");
      setIsAuthenticated(false);
    }
  }

  return (
    <>
      <Navbar />
      <DarkBG text="My Dashboard" />
      <main className={styles.dasboardContainer}>
        <div className={styles.sidebar}>
          <h3>My ACCOUNT</h3>
          <ul>
            <li>
              <button className={styles.dashboardBtn}>Orders</button>
            </li>
            <li>
              <button onClick={handleLogOut} className={styles.dashboardBtn}>
                Logout
              </button>
            </li>
          </ul>
        </div>

        <div className={styles.ordersContainer}>
          <h2>My Orders</h2>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ORDER ID</th>
                <th>ITEMS</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>
                    {order.items.map((item, index) => (
                      <span key={index}>
                        {item.title} x {item.quantity}
                        <br />
                      </span>
                    ))}
                  </td>
                  <td>
                    {order.items.map((item, index) => (
                      <span key={index}>
                        ₦{item.price}
                        <br />
                      </span>
                    ))}
                  </td>
                  <td>₦{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </>
  );
}
