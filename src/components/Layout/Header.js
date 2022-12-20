// Imports ---------------------------->
import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

// Component function ----------------------------------------------------------------------------->
const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Meals Hub</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="meals here " />
            </div>
        </Fragment>
    );
};

// Export ------------>
export default Header;
