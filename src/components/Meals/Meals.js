// Imports ---------------------------->
import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

// Component function ----------------------------------------------------------------------------->
const Meals = (props) => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    );
};

// Export ------------>
export default Meals;
