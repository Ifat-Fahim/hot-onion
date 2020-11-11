import React from "react";
import "./MenuTabs.css";
import fakedata from "../../fakedata/fakedata";
import FoodItem from "./FoodItem";

const AllFood = () => {
    return (
        <div className="tab">
            {fakedata.map((data) => (
                <FoodItem key={data.id} {...data} />
            ))}
        </div>
    );
};

export default AllFood;
