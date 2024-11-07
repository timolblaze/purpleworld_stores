import React, { useState, useEffect, useLayoutEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProductCard from "../../components/ProductCard";
import SalesComponent from "../../components/SalesComponent";
import Newsletter from "../../components/Newsletter";
import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Homepage() {
  const [newProducts, setNewProducts] = useState(null);
  const [popularProducts, setPopularProducts] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/products?category=67142bc188bcdf75ae067119&limit=5")
      .then((response) => {
        setNewProducts(response.data.data.products);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/products?category=67142bd488bcdf75ae06711a&limit=5")
      .then((response) => {
        setPopularProducts(response.data.data.products);
      });
  }, []);

  return (
    <>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.heroDiv}>
          <h1>Welcome to PurpleWorld Stores</h1>
          <h4>...home of quality Groceries and Skin Care </h4>
          <Link to="/shop"> Shop Now</Link>
        </div>
      </section>

      <SalesComponent heading="New Arrivals">
        {newProducts &&
          newProducts.map((product) => {
            return(
              <Link to={`/shop/${product.id}`} key={product.id}>
                <ProductCard
                  productName={product.title}
                  price={product.price}
                  category={product.category.title}
                  imgUrl={product.icon}
                  alt="New"
                />
              
              </Link>
            )
          })}
      </SalesComponent>

      <SalesComponent heading="Popular">
      {popularProducts &&
          popularProducts.map((product) => {
            return(
              <Link to={`/shop/${product.id}`} key={product.id}>
                <ProductCard
                  productName={product.title}
                  price={product.price}
                  category={product.category.title}
                  imgUrl={product.icon}
                  alt="Hot"
                />              
              </Link>
            )
          })}
      </SalesComponent>
      <Newsletter />
      <Footer />
    </>
  );
}
