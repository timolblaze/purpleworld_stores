import React, { useContext } from 'react'
import { ProductsContext } from '../contexts/ProductsContext'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

export default function ProductsList() {
    const {products} = useContext(ProductsContext);
   
  return (
    <>
        {products.map((product)=>{
              return(
                <Link to={`/shop/${product.id}`} key={product.id}> 
                  <ProductCard productName={product.title} category={product.category.title} price={`${product.price}`} imgUrl={product.icon} />
                </Link>
            )
        })}
    </>
  )
}
