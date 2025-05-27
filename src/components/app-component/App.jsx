import "./App.css";
import { useState } from "react";
import DesertComponentHolder from "../desert-component-holder/desert-component-holder.jsx";
import CartComponent from "../cart-component/cart-component.jsx";

function App() {
    const [cartItems, setCartItems] = useState([]);
  
    const handleAddToCart = (item) => {
      setCartItems((prevItems) => {
        if (item.quantity === 0) {
          // Remove item if quantity is 0
          return prevItems.filter((i) => i.name !== item.name);
        }
  
        const existingIndex = prevItems.findIndex(
          (i) => i.name === item.name
        );
  
        if (existingIndex !== -1) {
          // Update quantity
          const updatedItems = [...prevItems];
          updatedItems[existingIndex] = {
            ...updatedItems[existingIndex],
            quantity: item.quantity,
          };
          return updatedItems;
        } else {
          // Add new item
          return [...prevItems, item];
        }
      });
    };
  
    return (
      <>
        <DesertComponentHolder onAddToCart={handleAddToCart} />
        <CartComponent cartItems={cartItems} />
      </>
    );
  }

export default App;
