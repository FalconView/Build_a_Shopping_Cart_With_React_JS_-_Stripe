import { createContext, useState } from "react";
import { productsArray } from "./ProductsStore";

const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

// Code Down Here

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context
export default CartContext;
