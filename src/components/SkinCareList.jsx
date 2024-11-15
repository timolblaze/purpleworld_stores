import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { ProductsContext } from '../contexts/ProductsContext';
import LoadingComponent from './LoadingComponent';

export default function GroceriesList() {
    // Retrieving the Product items from the ProductsContext using the useContext React hook
    const {products} = useContext(ProductsContext);
      //Filtering the products to only return items with the Skincare category title in an array
    const skincare = products.filter(item => item.category.title === 'skincare');

  return (
    <>
          {/* Mapping through the skincare array above to create a List element */}
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
