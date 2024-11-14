import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { ProductsContext } from '../contexts/ProductsContext';
import LoadingComponent from './LoadingComponent';

export default function GroceriesList() {
    const {products} = useContext(ProductsContext);
    const skincare = products.filter(item => item.category.title === 'skincare');

  return (
    <>
        {skincare ? skincare.map((product)=>{
              return(
                <Link to={`/shop/${product.id}`} key={product.id}> 
                  <ProductCard productName={product.title} category={product.category.title} price={`${product.price}`} imgUrl={product.icon} />
                </Link>
            )
        }): <LoadingComponent />}
    </>
  )
}
