import React from 'react'
import SectionTopHeader from './SectionTopHeader'
import ProductCard from './ProductCard'
import styles from './SalesComponent.module.css'

export default function SalesComponent({heading, children}) {
  return (
    <section className={styles.hotSales}>
        <SectionTopHeader heading={heading}>
        <p className={styles.active}>Groceries</p>
          <p>Drinks</p>
          <p>Baby Food </p>
          <p>Skin care</p>
          <p>Home & Kitchen</p>
        </SectionTopHeader>

        <div>
            {children}
        </div>
      </section>
  )
}
