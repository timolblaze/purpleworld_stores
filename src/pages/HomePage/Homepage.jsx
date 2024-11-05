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
  const [displayProducts, setDisplayProducts] = useState(null);
  const [newProducts, setNewProducts] = useState(null);
  const [popularProducts, setPopularProducts] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/products?limit=10")
      .then((response) => {
        setDisplayProducts(response.data.data.products);
      });
  }, []);

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
        {displayProducts && (
          <div className={styles.gridSection}>
            <Link to={`shop/${displayProducts[6].id}`} className={styles.productCard}>
              <img src={displayProducts[6].icon} alt="" />
              <div>
                <h3>{displayProducts[6].title}</h3>
                <p> {displayProducts[6].category.title} </p>
                <Link to={`/shop/${displayProducts[6].id}`}>Shop Now!</Link>
              </div>
            </Link>

            <div>
              <Link to={`shop/${displayProducts[8].id}`} className={`${styles.productCard} ${styles.small}`}>
                <img src={displayProducts[8].icon} alt="" />
                <div>
                  <h3>{displayProducts[8].title}</h3>
                  <p> {displayProducts[8].category.title} </p>
                  <Link to={`/shop/${displayProducts[8].id}`}> Shop Now! </Link>
                </div>
              </Link>

              <Link to={`shop/${displayProducts[5].id}`} className={`${styles.productCard} ${styles.small}`}>
                <img src={displayProducts[5].icon} alt="" />
                <div>
                  <h3>{displayProducts[5].title}</h3>
                  <p> {displayProducts[5].category.title} </p>
                  <Link to={`/shop/${displayProducts[5].id}`}>Shop Now!</Link>
                </div>
              </Link>
            </div>

            <Link to={`shop/${displayProducts[9].id}`} className={`${styles.productCard} ${styles.long}`}>
              <img src={displayProducts[9].icon} alt="" />
              <div>
                <h3>{displayProducts[9].title}</h3>
                <p> {displayProducts[9].category.title} </p>
                <Link to={`/shop/${displayProducts[9].id}`}>Shop Now!</Link>
              </div>
            </Link>
          </div>
        )}
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
