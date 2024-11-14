import React, { useContext } from 'react'
import { ProductsContext } from '../contexts/ProductsContext'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';
import ReactLoading from 'react-loading';
import LoadingComponent from './LoadingComponent';

export default function ProductsList() {
    const {products} = useContext(ProductsContext);
   
  return (
    <>
        {products ? products.map((product)=>{
              return(
                <Link to={`/shop/${product.id}`} key={product.id}> 
                  <ProductCard productName={product.title} category={product.category.title} price={`${product.price}`} imgUrl={product.icon} />
                </Link>
            )
        }) : <LoadingComponent />}
    </>
  )
}
