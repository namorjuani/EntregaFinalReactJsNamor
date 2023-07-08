import React, { createContext, useState } from "react";

export const CartContext = React.createContext();
// Creamos el provider de nuestro context como un componente HOC el cual recibirá un children
//Children significa que podemos recibir uno o muchos componentes 
export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
//setState lo vamos a usar en el cartbutton
  return (
  <CartContext.Provider value={[count, setCount]}>
    {children}
  </CartContext.Provider>
  );
};