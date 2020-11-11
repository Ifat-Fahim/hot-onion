import React from "react";
import fakedata from "../../fakedata/fakedata";
import FoodItem from "./FoodItem";
import "./MenuTabs.css";

const Dinner = () => {
    const dinnerItem = fakedata.filter(
        (dinner) => dinner.categories === "dinner"
    );
    return (
        <div className="tab">
            {dinnerItem.map((data) => (
                <FoodItem key={data.id} {...data} />
            ))}
        </div>
    );
};

export default Dinner;
