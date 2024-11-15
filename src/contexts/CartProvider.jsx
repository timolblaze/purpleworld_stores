import React, { useState } from 'react'
import { CartContext } from './CartContext'

export default function CartProvider({children}) {
    const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cartItems')) || []);
    const [cartReference, setCartReference] = useState('')
  return (
    <CartContext.Provider value={{cartItems, setCartItems, cartReference, setCartReference}}>
        {children}
    </CartContext.Provider>
  )
}
