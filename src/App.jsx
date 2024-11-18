import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage/Homepage";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import ProductsLayout from "./components/ProductsLayout";
import ProductsList from "./components/ProductsList";
import GroceriesList from "./components/GroceriesList";
import SkinCareList from "./components/SkinCareList";
import CartProvider from "./contexts/CartProvider";
import Checkout from "./pages/Checkout/Checkout";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoutes from "./components/PrivateRoutes";
import Errorpage from "./pages/ErrorPage/Errorpage";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<ProductsLayout />}>
            <Route index element={<Homepage />} />

            <Route path="/shop" element={<Shop />}>
              <Route index element={<ProductsList />} />
              <Route path="groceries" element={<GroceriesList />} />
              <Route path="skincare" element={<SkinCareList />} />
            </Route>
            <Route path="shop/:productId" element={<ProductDetails />} />

            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoutes>
                <Dashboard />
              </PrivateRoutes>
            }
          />
          <Route path="/*" element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
