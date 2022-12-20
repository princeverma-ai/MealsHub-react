// Imports ---------------------------->
import React from "react";

//Function ----------------------------------------------------------------------------->
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
});

// Export ------------>
export default CartContext;
