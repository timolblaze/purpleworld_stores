import Navbar from "../../components/Navbar";
import Process from "../../components/Process/Process";
import Footer from "../../components/Footer";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const ShoppingCart = () => {
  const {cartItems} = useContext(CartContext)

  return (
    <main>
      <Navbar />
      <Process />

      {/* Conditionally rendering the componenets below based on the value of the Cart items array*/}
      {cartItems.length < 1 ? <EmptyCart /> : <FilledCart />}
      
      <Footer />
    </main>
  );
};

export default ShoppingCart;
