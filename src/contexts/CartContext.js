import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({children}) {
  const [itemSelected, setItemSelected] = useState([]);

  return(
    <CartContext.Provider value={{itemSelected, setItemSelected}}>
      {children}
    </CartContext.Provider>
  )
}