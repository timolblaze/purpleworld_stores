import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./Homepage.module.css";
import BabyMeal from "../../assets/nutribom.png";
import B2school from "../../assets/back2school.png";
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
  return (
    <>
      <Navbar />
      <section className={styles.hero}>
        <div className={styles.gridSection}>
          <div className={styles.productCard}>
            <h3>Baby Cereal</h3>
            <p> Drinks </p>
            <a href="3">Shop Now!</a>
          </div>

          <div>
            <div className={`${styles.productCard} ${styles.small}`}>
              <h3>Baby Cereal</h3>
              <p> Drinks </p>
              <a href="3">Shop Now!</a>
            </div>
            <div className={`${styles.productCard} ${styles.small}`}>
              <h3>Baby Cereal</h3>
              <p> Drinks </p>
              <a href="3">Shop Now!</a>
            </div>
          </div>

          <div className={`${styles.productCard} ${styles.long}`}>
            <h3>Baby Cereal</h3>
            <p> Drinks </p>
            <a href="3">Shop Now!</a>
          </div>
        </div>
      </section>

      <section className={styles.hotSection}>
        <SectionTopHeader heading="New Arrivals">
          <p className={styles.active}>Groceries</p>
          <p>Drinks</p>
          <p>Baby Food </p>
          <p>Skin care</p>
          <p>Home & Kitchen</p>
        </SectionTopHeader>

        <div className={styles.bannerSection}>
          <div>
            <div>
              <img src={Ceralac} alt="Ceralac" />
            </div>
            <div>
              <img src={Diaper} alt="Diaper wears" />
            </div>
          </div>
          <div>
            <div>
              <img src={Coke} alt="Coca Cola" />
            </div>
            <div>
              <img src={Coffee} alt="Coffee drink" />
            </div>
          </div>
        </div>
      </section>

      <SalesComponent heading="Best of the week">
        <ProductCard
          productName="Kellogs Cereal"
          price="$5.84"
          category="cereals"
          imgUrl={Kellogs}
          alt="Hot"
        />
        <ProductCard
          productName="Kellogs Cereal"
          price="$5.84"
          category="cereals"
          imgUrl={Kellogs}
          alt="Hot"
        />
        <ProductCard
          productName="Kellogs Cereal"
          price="$5.84"
          category="cereals"
          imgUrl={Kellogs}
        />
        <ProductCard
          productName="Kellogs Cereal"
          price="$5.84"
          category="cereals"
          imgUrl={Kellogs}
          alt="Hot"
        />
        <ProductCard
          productName="Kellogs Cereal"
          price="$5.84"
          category="cereals"
          imgUrl={Kellogs}
        />
      </SalesComponent>

      <SalesComponent heading="Popular In Category">
        <ProductCard
          productName="Kellogs Cereal"
          price="$5.84"
          category="cereals"
          imgUrl={Kellogs}
          alt="Hot"
        />
        <ProductCard
          productName="Kellogs Cereal"
          price="$5.84"
          category="cereals"
          imgUrl={Kellogs}
          alt="Hot"
        />
        <ProductCard
          productName="Kellogs Cereal"
          price="$5.84"
          category="cereals"
          imgUrl={Kellogs}
        />
        <ProductCard
          productName="Kellogs Cereal"
          price="$5.84"
          category="cereals"
          imgUrl={Kellogs}
          alt="Hot"
        />
        <ProductCard
          productName="Kellogs Cereal"
          price="$5.84"
          category="cereals"
          imgUrl={Kellogs}
        />
      </SalesComponent>

      <Newsletter />

      <Footer />
    </>
  );
}
