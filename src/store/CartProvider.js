// Imports ---------------------------->
import CartContext from "./cart-context";
import { useReducer } from "react";

//default state ----------------------->
const defaultCartState = {
    items: [],
    totalAmount: 0,
};
//Reducer functions-------------------------------------------------------------------------------->
const cartReducer = (state, action) => {
    //ADD ACTION-------------------------------------------------->
    if (action.type === "ADD") {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        //checking if item exists already or not ------------------------------>
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    //REMOVE ACTION-------------------------------------------------->
    if (action.type === "REMOVE") {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;
        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter((item) => {
                return item.id !== action.id;
            });
        } else {
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultCartState;
};

// Component function ----------------------------------------------------------------------------->
const CartProvider = (props) => {
    //cart state management---------------------------->
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

    //contect handling--------------------------------->
    const addItemToCartHandler = (item) => {
        dispatchCart({ type: "ADD", item: item });
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCart({ type: "REMOVE", id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };
    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

// Export ------------>
export default CartProvider;
