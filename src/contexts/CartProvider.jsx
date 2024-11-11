import React, { useState } from 'react'
import { CartContext } from './CartContext'

export default function CartProvider({children}) {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
  return (
    <CartContext.Provider value={{cartItems, setCartItems}}>
        {children}
    </CartContext.Provider>
  )
}
