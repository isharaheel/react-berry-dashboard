import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add product to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      // Check if item already exists
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Otherwise add new item with quantity 1
      return [...prev, { ...product, quantity: 1 }];
    });
  };

 const updateQuantity = (id, newQty) => {
  // If the new quantity is less than 1, don't do anything
  if (newQty < 1) return;

  setCartItems((prevItems) =>
    prevItems.map((item) =>
      item.id === id ? { ...item, quantity: newQty } : item
    )
  );
};

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};