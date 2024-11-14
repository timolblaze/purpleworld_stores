import { useState, useEffect } from "react";
import axios from "axios";
import { ProductsContext } from "./ProductsContext";

export function ProductsProvider({children}){
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        axios.get('https://pw-be-1.onrender.com/api/v1/products?limit=20').then(response => {
          setProducts(response.data.data.products)
        })
      },[])

    return(
        <ProductsContext.Provider value={{products, setProducts}}>
            {children}
        </ProductsContext.Provider>
    )
    
}