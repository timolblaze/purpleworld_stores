import React, { useState } from 'react'
import { CartContext } from './CartContext'

export default function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([]);
  return (
    <CartContext.Provider value={{cartItems, setCartItems}}>
        {children}
    </CartContext.Provider>
  )
}
