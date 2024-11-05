import Navbar from '../../components/Navbar'
import DarkBG from '../../components/DarkBG'
import Footer from '../../components/Footer'
import ProductCard from '../../components/ProductCard'
import styles from './Shop.module.css' 
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ProductsContext } from '../../contexts/ProductsContext'

export default function Shop() {
  const [groceries, setGroceries] = useState(false)
  const [skinCare, setSkinCare] = useState([])

  const {products} = useContext(ProductsContext)

  useEffect(()=>{
    axios.get()
  })
  return (
    <>
        <Navbar />
        <DarkBG text="Shop">
          <div>
            <p onClick={()=>setGroceries(!groceries)}>Groceries</p> 
            <p> &#62; </p>
            <p onClick={()=>setSkinCare(!skinCare)}>Skin Care</p>
          </div> 
        </DarkBG>
          <section className={styles.productArea}>
            {products.map((product)=>{
              return(
                <Link to={`/shop/${product.id}`} key={product.id}> 
                  <ProductCard productName={product.title} category={product.category.title} price={`${product.price}`} imgUrl={product.icon} />
                </Link>
              )
            })}

          </section>
        <Footer />
    </>
  )
}
