import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProductIndex = prevItems.findIndex(item => item.productName === product.productName);
      if (existingProductIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingProductIndex].quantity += 1;
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        return updatedItems;
      } else {
        const updatedItems = [...prevItems, { ...product, quantity: 1 }];
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        return updatedItems;
      }
    });
  };

  const updateQuantity = (productName, quantity) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map(item => 
        item.productName === productName ? { ...item, quantity } : item
      ).filter(item => item.quantity > 0);
      localStorage.setItem('cartItems', JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
