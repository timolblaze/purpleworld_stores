import React, { useContext, useState } from "react";
import filled from "./filledcart.module.css";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

const FilledCart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [couponCode, setCouponCode] = useState("");

  const handleQuantityChange = (id, newQuantity) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        const updatedSubtotal = item.price * newQuantity;
        return { ...item, quantity: newQuantity, subtotal: updatedSubtotal };
      }
      return item;
    });
    setCartItems(() => updatedItems);
  };

  const handleApplyCoupon = () => {
    alert("OOPS!! Coupon Not Available Now. Kindly check back later");
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };
  const subtotal = cartItems.reduce(
    (acc, item) => acc + Number(item.subtotal),
    0
  );
  const removeItem = (item) =>{
    const updatedCart = cartItems.filter((cartItem) => cartItem.id != item.id)
    setCartItems(updatedCart)
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  }
  
  return (
    <div className={filled.cartPage}>
      <div className={filled.left}>
        <div className={filled.cartTableContainer}>
        <table className={filled.cartTable}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems &&
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  handleQuantityChange={handleQuantityChange}
                  removeItem={removeItem}
                />
              ))}
          </tbody>
        </table>
        </div>

        {/* Coupon and Actions */}
        <div className={filled.cartActionDiv}>
          <div className={filled.cartActions}>
            <input
              type="text"
              placeholder="Coupon code"
            />
            <button onClick={handleApplyCoupon}>APPLY COUPON</button>
          </div>

          <span className={filled.filledActionButtons}>
            <button className={filled.clearCart} onClick={clearCart}>
              CLEAR CART
            </button>
            <Link to="/shop" className={filled.update}>
              BACK TO SHOP
            </Link>
          </span>
        </div>
      </div>

      {/* Cart Totals */}
      <CartTotals total={subtotal} />
    </div>
  );
};

const CartItem = ({ item, handleQuantityChange, removeItem }) => {
  return (
    <tr>
      <td className={filled.productDetails}>
        <span
          onClick={() =>removeItem(item)}
        >
          x
        </span>
        <div>
          <img src={item.icon} alt={item.title} width="50" />
          <span>{item.title}</span>
        </div>
      </td>
      <td className={filled.price}>₦{item.price}</td>
      <td className={filled.quantity}>
        <button
          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
        >
          -
        </button>
        <input type="text" value={item.quantity} readOnly />
        <button
          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
        >
          +
        </button>
      </td>
      <td className={filled.subtotal}>₦{item.quantity * item.price}</td>
    </tr>
  );
};

const CartTotals = ({ total }) => {
  return (
    <div className={filled.cartTotals}>
      <h3>Cart Totals</h3>
      <div>
        <p className={filled.T}>
          Total: <span>₦{Number(total.toFixed(2)).toLocaleString()}</span>
        </p>
      </div>
      <Link to="/checkout">PROCEED TO CHECKOUT</Link>
    </div>
  );
};

export default FilledCart;
