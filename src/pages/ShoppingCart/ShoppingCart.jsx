import React, {useState} from "react";
import Navbar from "../../components/Navbar";
import Process from "../../components/Process/Process";
import Footer from "../../components/Footer";
import EmptyCart from "./EmptyCart";
import FilledCart from "./FilledCart";

const ShoppingCart = () => {
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  return (
    <main>
      <Navbar />
      <Process />
      {isCartEmpty ? <EmptyCart /> : <FilledCart />}
      <Footer />
    </main>
  );
};

export default ShoppingCart;
