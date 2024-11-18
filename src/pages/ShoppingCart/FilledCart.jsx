import React, { useContext, useState } from "react";
import filled from "./filledcart.module.css";
import { CartContext } from "../../contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const FilledCart = () => {
  // State variables to manage data for the FilledCart component
  const [couponCode, setCouponCode] = useState("");

  // Retrieving the cartItems from the CartContext using the useContext React hook
  const { cartItems, setCartItems } = useContext(CartContext);

  // handleQuantityChange to update the quantity of each cartItem
  const handleQuantityChange = (id, newQuantity) => {
    // mapping through the cartItems to return an updated CartItems with the new quantity change 
    const updatedItems = cartItems.map((item) => {
      // checking the id of the cartItem and matching it with the id of any existing cart Item
      if (item.id === id) {
        const updatedSubtotal = item.price * newQuantity;
        return { ...item, quantity: newQuantity, subtotal: updatedSubtotal };
      }
      return item;
    });
    // updates the CartItems state variable with the updatedItems array returned after mapping through the CartItems array
    setCartItems(() => updatedItems);
  };

  const handleApplyCoupon = () => {
    alert("OOPS!! Coupon Not Available Now. Kindly check back later");
  };

  // clearCart function to clear the cartItems to be empty
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  // calculating the total cost of items
  const subtotal = cartItems.reduce(
    (acc, item) => acc + Number(item.subtotal),
    0
  );

  // removeItem function to remove an individual item from the carts
  const removeItem = (item) =>{
    // filtering the cartItems to remove the item that matched the id of the item clicked
    const updatedCart = cartItems.filter((cartItem) => cartItem.id != item.id)
    setCartItems(updatedCart)
    // setting the localStorage to have the current updated cartItems
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

// Cartitems component for each item in the cart
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
  // Retrieving the setReference function to update the value of the reference state after a reference is generated
  const {setCartReference} = useContext(CartContext);

  //generateReference function to generate a reference for each order during the checkout phase
  function generateReference() {
    axios.get('https://pw-be-1.onrender.com/api/v1/orders/ref')
        .then(res => {
            const ref = res.data.data;
            setCartReference(ref.reference); 
            navigate('/checkout'); 
        })
        .catch(error => {
            console.error("Error fetching reference:", error);
        });
  }

  // assigning the useNavigate react-router-dom hook to the navigate variable 
  const navigate = useNavigate()

  return (
    <div className={filled.cartTotals}>
      <h3>Cart Totals</h3>
      <div>
        <p className={filled.T}>
          Total: <span>₦{Number(total.toFixed(2)).toLocaleString()}</span>
        </p>
      </div>
      <button to="/checkout" onClick={generateReference}>PROCEED TO CHECKOUT</button>
    </div>
  );
};

export default FilledCart;
