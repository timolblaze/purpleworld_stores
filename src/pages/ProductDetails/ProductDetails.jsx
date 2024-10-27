import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./ProductDetails.module.css";
import Kellogs from "../../assets/kellogs.png";
import SectionTopHeader from "../../components/SectionTopHeader";
import ProductCard from "../../components/ProductCard";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);

  function addQuantity() {
    setQuantity((prev) => prev + 1);
  }
  function reduceQuantity() {
    if(quantity > 1) setQuantity((prev) => prev - 1);
  }

  return (
    <>
      <Navbar />
      <section className={styles.productDiv}>
        <div className={styles.imgCtn}>
          <img src={Kellogs} alt="Kellogs" />
        </div>
        <div className={styles.productText}>
          <h4>Groceries</h4>
          <h2>Kellogs Cornflakes Cereal</h2>
          <p>$12.80</p>

          <div className={styles.productDetails}>
            <p>
              Savour the iconic taste sensation that is Pringles . A blend of
              potatoes and crisp salt finish, plus a unique freshness to keep
              our crisps crunchy inside our iconic red can. Whether it be a
              tasty party snack or tempting bite to share with your friends,
              it&apos;s always a good time for Pringles. And with its
              re-sealable 40-gram tube, you can share all of your Pringles now,
              or save them for later. New perfect flavour in every bite
            </p>
          </div>

          <div className={styles.cartDiv}>
            <div>
              <p onClick={addQuantity}>+</p>
              <p>{quantity}</p>
              <p onClick={reduceQuantity}>-</p>
            </div>
            <button>Add to Cart </button>
          </div>
        </div>
      </section>

      <section className={styles.relatedProducts}>
        <SectionTopHeader heading="Related Products" />
        <div>
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
            alt="Hot"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
