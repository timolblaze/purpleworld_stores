import React, { useContext, useState } from "react";
import { cartItemsData, cartTotals } from "../../components/mock";
import filled from "./filledcart.module.css";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

const FilledCart = () => {
  // const [cartItems, setCartItems] = useState(cartItemsData);
  const [couponCode, setCouponCode] = useState("");
  const {cartItems, setCartItems} = useContext(CartContext);

  const handleQuantityChange = (id, newQuantity) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        const updatedSubtotal = item.price * newQuantity;
        return { ...item, quantity: newQuantity, subtotal: updatedSubtotal };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const handleApplyCoupon = () => {
    console.log("Coupon applied:", couponCode);
  };

  const handleProceedToCheckout = () => {
    console.log("Proceeding to checkout...");
  };

  const clearCart = () =>{
    setCartItems([])
    localStorage.removeItem('cartItems');
  }
  const subtotal = cartItems.reduce((acc, item) => acc + Number(item.subtotal), 0);

  return (
    <div className={filled.cartPage}>
      <div className={filled.left}>
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
            {cartItems && cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                handleQuantityChange={handleQuantityChange}
              />
            ))}
          </tbody>
        </table>

        {/* Coupon and Actions */}
        <div className={filled.cartActionDiv}>
          <div className={filled.cartActions}>
            <input
              type="text"
              placeholder="Coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button onClick={handleApplyCoupon}>APPLY COUPON</button>
          </div>
            <button className={filled.clearCart} onClick={clearCart}>CLEAR CART</button>
          <Link to='/shop' className={filled.update}>BACK TO SHOP</Link>
        </div>
      </div>

      {/* Cart Totals */}
      <CartTotals
        subtotal={subtotal}
        total={subtotal}
        onCheckout={handleProceedToCheckout}
      />
    </div>
  );
};

const CartItem = ({ item, handleQuantityChange }) => {
  return (
    <tr>
      <td className={filled.productDetails}>
        <span>x</span>
        <div>
          <img src={item.icon} alt={item.title} width="50" />
          <span>{item.title}</span>
        </div>
      </td>
      <td className={filled.price}>${item.price}</td>
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
      <td className={filled.subtotal}>${item.quantity * item.price}</td>
    </tr>
  );
};

const CartTotals = ({ subtotal, total, onCheckout }) => {
  return (
    <div className={filled.cartTotals}>
      <h3>Cart Totals</h3>
      <div>
        <p className={filled.subT}>
          Subtotal: <span>₦{subtotal.toFixed(2)}</span>
        </p>
        <p className={filled.T}>
          Total: <span>₦{Number(total.toFixed(2)).toLocaleString()}</span>
        </p>
      </div>
      <button onClick={onCheckout}>PROCEED TO CHECKOUT</button>
    </div>
  );
};

export default FilledCart;
