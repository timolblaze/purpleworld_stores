import { BrowserRouter,Routes, Route } from "react-router-dom"
import Homepage from "./pages/HomePage/Homepage"
import Login from "./pages/Login"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import Shop from "./pages/Shop/Shop"



function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        
        <Route path="shop/product" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
