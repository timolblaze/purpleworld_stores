import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./Homepage.module.css";
import BabyMeal from "../../assets/nutribom.png";
import B5school from "../../assets/back2school.png";
import Nivea from "../../assets/nivea.png";
import Utensils from "../../assets/utensils.png";
import Ceralac from "../../assets/ceralac.png";
import Coke from "../../assets/drink.png";
import Diaper from "../../assets/smileBaby.png";
import Coffee from "../../assets/coffee.png";
import SectionTopHeader from "../../components/SectionTopHeader";
import ProductCard from "../../components/ProductCard";
import Kellogs from "../../assets/kellogs.png";
import SalesComponent from "../../components/SalesComponent";
import Newsletter from "../../components/Newsletter";

export default function Homepage() {
  const [displayProducts, setDisplayProducts] = useState(null);
  const [newProducts, setNewProducts] = useState(null);
  const [popularProducts, setPopularProducts] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/products?limit=10")
      .then((response) => {
        setDisplayProducts(response.data.data.products);
        console.log(response.data.data.products);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/products?category=67142bc188bcdf75ae067119&limit=5")
      .then((response) => {
        setNewProducts(response.data.data.products);
        console.log(response.data.data.products);
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/products?category=67142bd488bcdf75ae06711a&limit=5")
      .then((response) => {
        setPopularProducts(response.data.data.products);
        console.log(response.data.data.products);
      });
  }, []);

  return (
    <>
      <Navbar />
      <section className={styles.hero}>
        {displayProducts && (
          <div className={styles.gridSection}>
            <div className={styles.productCard}>
              <img src={displayProducts[6].icon} alt="" />
              <div>
                <h3>{displayProducts[6].title}</h3>
                <p> {displayProducts[6].category.title} </p>
                <a href="3">Shop Now!</a>
              </div>
            </div>

            <div>
              <div className={`${styles.productCard} ${styles.small}`}>
                <img src={displayProducts[8].icon} alt="" />
                <div>
                  <h3>{displayProducts[8].title}</h3>
                  <p> {displayProducts[8].category.title} </p>
                  <a href="3">Shop Now!</a>
                </div>
              </div>

              <div className={`${styles.productCard} ${styles.small}`}>
                <img src={displayProducts[5].icon} alt="" />
                <div>
                  <h3>{displayProducts[5].title}</h3>
                  <p> {displayProducts[5].category.title} </p>
                  <a href="3">Shop Now!</a>
                </div>
              </div>
            </div>

            <div className={`${styles.productCard} ${styles.long}`}>
              <img src={displayProducts[9].icon} alt="" />
              <div>
                <h3>{displayProducts[9].title}</h3>
                <p> {displayProducts[9].category.title} </p>
                <a href="3">Shop Now!</a>
              </div>
            </div>
          </div>
        )}
      </section>

      <SalesComponent heading="New Arrivals">
        {newProducts &&
          newProducts.map((product) => {
            return(
              <ProductCard
                productName={product.title}
                price={product.price}
                category={product.category.title}
                imgUrl={product.icon}
                alt="New"
              />
            )
          })}
      </SalesComponent>

      <SalesComponent heading="Popular">
      {popularProducts &&
          popularProducts.map((product) => {
            return(
              <ProductCard
                productName={product.title}
                price={product.price}
                category={product.category.title}
                imgUrl={product.icon}
                alt="Hot"
              />
            )
          })}
      </SalesComponent>

      <Newsletter />

      <Footer />
    </>
  );
}
