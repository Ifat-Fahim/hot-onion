import React from "react";
import fakedata from "../../fakedata/fakedata";
import FoodItem from "./FoodItem";
import "./MenuTabs.css";

const Lunch = () => {
    const lunchItem = fakedata.filter((lunch) => lunch.categories === "lunch");
    return (
        <div className="tab">
            {lunchItem.map((data) => (
                <FoodItem key={data.id} {...data} />
            ))}
        </div>
    );
};

export default Lunch;
