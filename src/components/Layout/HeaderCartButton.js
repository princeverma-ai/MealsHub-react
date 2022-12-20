// Imports ---------------------------->
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

// Component function ----------------------------------------------------------------------------->
const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItem = cartCtx.items.reduce((currrentNumber, item) => {
        return currrentNumber + item.amount;
    }, 0);

    //button animation-------------------------------------->
    const { items } = cartCtx;

    const [buttonIsHighlited, setButtonIsHighlited] = useState(false);
    const buttonClasses = `${classes.button} ${buttonIsHighlited ? classes.bump : ""}`;
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        const timer = setTimeout(() => {
            setButtonIsHighlited(false);
        }, 300);
        setButtonIsHighlited(true);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={buttonClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItem}</span>
        </button>
    );
};

// Export ------------>
export default HeaderCartButton;
