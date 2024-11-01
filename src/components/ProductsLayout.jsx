import React from 'react'
import { ProductsProvider } from '../contexts/ProductsProvider'
import { Outlet } from 'react-router-dom'

export default function ProductsLayout() {
  return (
    <ProductsProvider>
        <Outlet />
    </ProductsProvider>
  )
}
