"use client"; // Ensures this file runs only on the client side (necessary for localStorage)

import { createContext, useContext, useEffect, useRef, useState, ReactNode } from "react";

// Define the shape of a cart item
interface CartItem {
  id: number;         // Unique identifier for the product
  name: string;       // Name of the product
  price: number;      // Price of a single product
  quantity: number;   // Quantity of this item in the cart
  image: string;      // Image URL or path
}

// Define the type for the context, including the cart and actions
interface CartContextType {
  cart: CartItem[];                              // The array of items in the cart
  addToCart: (item: CartItem) => void;           // Function to add an item to the cart
  removeFromCart: (id: number) => void;          // Function to remove an item by ID
  clearCart: () => void;                         // Function to clear the entire cart
}

// Create the CartContext with an initial value of `undefined`
// Consumers will check for undefined to ensure they are inside a CartProvider
const CartContext = createContext<CartContextType | undefined>(undefined);

// The CartProvider wraps any part of your app that needs access to the cart state
export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Initialize cart state as an empty array
  const [cart, setCart] = useState<CartItem[]>([]);

  //  Load cart items from localStorage when the component mounts (only runs on client)
  useEffect(() => {
    const storedCart = localStorage.getItem("cart"); // Get saved cart JSON string
    if (storedCart) {
      setCart(JSON.parse(storedCart));              // Parse it and set it as state
    }
}, []); // Empty dependency array = run only once on mount

  //  Save the cart to localStorage every time it changes
  const initialRender = useRef(true)
  useEffect(() => {
    if (initialRender.current) {
        initialRender.current = false;
        return;
    }
    window.localStorage.setItem("cart", JSON.stringify(cart));
  })
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage
    } else {
      localStorage.removeItem("cart");                    // Clean up if cart is empty
    }
  }, [cart]); // This runs every time the cart state changes

  //  Function to add an item to the cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id); // Check if item is already in the cart
      if (existingItem) {
        // If it exists, update its quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 } // Increase quantity
            : cartItem // Leave other items unchanged
        );
      }
      // If item does not exist, add it to the cart with quantity = 1
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  //  Function to remove an item from the cart by ID
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id)); // Remove the item
  };

  //  Function to clear the cart (empty array)
  const clearCart = () => {
    setCart([]); // Reset cart state
  };

  //  Return the cart and functions via context to children components
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

//  Custom hook to use the CartContext in child components
export const useCart = () => {
  const context = useContext(CartContext); // Access the cart context
  if (!context) {
    // If context is undefined, user is using the hook outside of CartProvider
    throw new Error("useCart must be used within a CartProvider");
  }
  return context; // Return the context value
};
