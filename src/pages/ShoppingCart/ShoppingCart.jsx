import React, {useState} from "react";
import Navbar from "../../components/Navbar";
import Process from "../../components/Process/Process";
import Footer from "../../components/Footer";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const ShoppingCart = () => {
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const {cartItems} = useContext(CartContext)

  return (
    <main>
      <Navbar />
      <Process />
      {cartItems.length < 1 ? <EmptyCart /> : <FilledCart />}
      <Footer />
    </main>
  );
};

export default ShoppingCart;
