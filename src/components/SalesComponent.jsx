import React from 'react'
import SectionTopHeader from './SectionTopHeader'
import ProductCard from './ProductCard'
import styles from './SalesComponent.module.css'

export default function SalesComponent({heading, children}) {
  return (
    <section className={styles.hotSales}>
        <SectionTopHeader heading={heading}>
        <p className={styles.active}>Groceries</p>
          <p>Skin care</p>
        </SectionTopHeader>

        <div>
            {children}
        </div>
      </section>
  )
}
