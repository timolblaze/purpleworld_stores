import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "./ProductDetails.module.css";
import SectionTopHeader from "../../components/SectionTopHeader";
import ProductCard from "../../components/ProductCard";
import { ProductsContext } from "../../contexts/ProductsContext";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../../contexts/CartContext";

export default function ProductDetails() {
  const { productId } = useParams();
  const { products } = useContext(ProductsContext);
  const { setCartItems, cartItems } = useContext(CartContext);
  const [relatedProducts, setRelatedProducts] = useState(null);
  const product = products.find((product) => product.id === productId);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/products?sortBy=popular&limit=5")
      .then((response) => {
        const { products } = response.data.data;
        setRelatedProducts(products);
      });
  }, []);

  function addToCart() {
    const existing = cartItems.some(items => items.id === product.id)
    if(existing){
      alert('Item already exists in Cart. Head over to the Cart page and checkout 😎')
    }else{
      let updatedCartItems = [...cartItems, {...product, quantity: 1, subtotal: product.price}]
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      alert('Successfully added to Cart');
    }
  }

  return (
    <>
      <Navbar />
      <section className={styles.productDiv}>
        {product && (
          <>
            <div className={styles.imgCtn}>
              <img src={product.icon} alt={product.title} />
            </div>
            <div className={styles.productText}>
              <h4>{product.category.title}</h4>
              <h2>{product.title}</h2>
              <p>{`$${product.price}`}</p>

              <div className={styles.productDetails}>
                <p>
                  Savour the iconic taste sensation that is Pringles . A blend
                  of potatoes and crisp salt finish, plus a unique freshness to
                  keep our crisps crunchy inside our iconic red can. Whether it
                  be a tasty party snack or tempting bite to share with your
                  friends, it&apos;s always a good time for Pringles. And with
                  its re-sealable 40-gram tube, you can share all of your
                  Pringles now, or save them for later. New perfect flavour in
                  every bite
                </p>
              </div>

              <div className={styles.cartDiv}>
                <button onClick={addToCart}>Add to Cart </button>
              </div>
            </div>
          </>
        )}
      </section>

      <section className={styles.relatedProducts}>
        <SectionTopHeader heading="Related Products" />
        <div>
          {relatedProducts &&
            relatedProducts.map((product) => {
              return (
                <Link to={`/shop/${product.id}`} key={product.id}>
                  <ProductCard
                    productName={product.title}
                    price={product.price}
                    category={product.category.title}
                    imgUrl={product.icon}
                    alt="Hot"
                  />
                </Link>
              );
            })}
        </div>
      </section>
      <Footer />
    </>
  );
}
