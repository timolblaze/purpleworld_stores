import React from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({
  imgUrl,
  category,
  price,
  productName,
  alt,
}) {
  return (
    <div className={styles.card}>
      {alt && <p className={styles.alt}>{alt}</p>}
      <div>
        <img src={imgUrl} alt={productName} />
      </div>
      <div>
        <p>{productName}</p>
        <h4>{category}</h4>
        <p>₦{price}</p>
      </div>
    </div>
  );
}
