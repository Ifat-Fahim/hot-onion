import React from "react";
import fakedata from "../../fakedata/fakedata";
import FoodItem from "./FoodItem";
import "./MenuTabs.css";

const Breakfast = () => {
    const breakfastItem = fakedata.filter(
        (breakfast) => breakfast.categories === "breakfast"
    );
    return (
        <div className="tab">
            {breakfastItem.map((data) => (
                <FoodItem key={data.id} {...data} />
            ))}
        </div>
    );
};

export default Breakfast;