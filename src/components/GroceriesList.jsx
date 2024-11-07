import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { ProductsContext } from '../contexts/ProductsContext';

export default function GroceriesList() {
    const {products} = useContext(ProductsContext);
    const groceries = products.filter(grocery => grocery.category.title === 'groceries');

  return (
    <>
        {groceries.map((product)=>{
              return(
                <Link to={`/shop/${product.id}`} key={product.id}> 
                  <ProductCard productName={product.title} category={product.category.title} price={`${product.price}`} imgUrl={product.icon} />
                </Link>
            )
        })}
    </>
  )
}
