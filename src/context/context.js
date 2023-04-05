import React, { createContext, useEffect, useState } from "react";
export const Context = createContext();
export default function CartContext({ children }) {
  const [data, setData] = useState([]);

  // clearCart function
  const [itemAmount, setItemAmount] = useState(0);
  function addToCart(product, id) {
    const newItem = { ...product, amount: 1 };
    const cartItem = data.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...data].map((item) => {
        // console.log(item);
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setData(newCart);
    } else {
      setData([...data, newItem]);
    }
  }

  function incrementAmount() {
    data?.map((element, value) => {
      let count = element?.amount;
      setItemAmount(count);
    });
  }

  function clearCart() {
    setData([]);
  }

  const removeFromCart = (id) => {
    const newCart = data.filter((item) => {
      return item.id !== id;
    });
    setData(newCart);
  };

  return (
    <>
      <Context.Provider
        value={{
          data,
          clearCart,
          incrementAmount,
          removeFromCart,
          addToCart,
          setData,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
}
