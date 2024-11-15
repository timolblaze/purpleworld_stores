import React, { useContext, useState } from "react";
import Navbar from "../../components/Navbar";
import DarkBG from "../../components/DarkBG";
import Footer from "../../components/Footer";
import { Link, useLocation } from "react-router-dom";
import styles from "./Dashboard.module.css"
import { AuthContext } from "../../contexts/AuthProvider";

export default function Dashboard() {
  const location = useLocation();
  const {isAuthenticated, setIsAuthenticated} = useContext(AuthContext);
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

  function handleLogOut() {
    if(isAuthenticated){
      localStorage.removeItem("registeredUsers");
      localStorage.removeItem("loggedInUsers");
      setIsAuthenticated(false)
    }
  }
  

  return (
    <>
      <Navbar />
      <DarkBG text="My Dashboard" />
      <main className={styles.dasboardContainer}>
      <div className={styles.sidebar}>
      <h3>My ACCOUNT</h3>
      <ul >
        <li>
          <button className={styles.dashboardBtn}>Orders</button>
        </li>
        <li>
          <button className={styles.dashboardBtn}>Account details</button>
        </li>
        <li>
          <button onClick={handleLogOut} className={styles.dashboardBtn}>Logout</button>
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
