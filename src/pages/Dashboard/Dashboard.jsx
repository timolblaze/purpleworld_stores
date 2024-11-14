import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import DarkBG from "../../components/DarkBG";
import Footer from "../../components/Footer";
import { Link, useLocation } from "react-router-dom";
import styles from "./Dashboard.module.css"

export default function Dashboard() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const orders = [
    {
      id: "#16106",
      date: "June 19, 2024",
      status: "On hold",
      total: "₦9,925.00",
      items: 1,
    },
  ];
  

  return (
    <>
      <Navbar />
      <DarkBG text="My Dashboard" />
      <main className={styles.dasboardContainer}>
      <div className={styles.sidebar}>
      <h3>My ACCOUNT</h3>
      <ul>
        <li className={location.pathname === "/dashboard" ? styles.active : ""}>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className={location.pathname === "/orders" ? styles.active : ""}>
          <Link to="/orders">Orders</Link>
        </li>
        <li className={location.pathname === "/downloads" ? styles.active : ""}>
          <Link to="/downloads">Downloads</Link>
        </li>
        <li className={location.pathname === "/addresses" ? styles.active : ""}>
          <Link to="/addresses">Addresses</Link>
        </li>
        <li className={location.pathname === "/account-details" ? styles.active : ""}>
          <Link to="/account-details">Account details</Link>
        </li>
        <li className={location.pathname === "/wishlist" ? styles.active : ""}>
          <Link to="/wishlist">Wishlist</Link>
        </li>
        <li className={location.pathname === "/logout" ? styles.active : ""}>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
        
      <div className={styles.ordersContainer}>
      <h2>My Orders</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ORDERS</th>
            <th>DATE</th>
            <th>STATUS</th>
            <th>TOTAL</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>
                {order.total} for {order.items} item{order.items > 1 ? "s" : ""}
              </td>
              <td>
                <button className={styles.viewButton}>VIEW</button>
              </td>
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
