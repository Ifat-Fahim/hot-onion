import React from "react";
import fakedata from "../../fakedata/fakedata";
import FoodItem from "./FoodItem";

const Lunch = () => {
    return (
        <>
            {fakedata.map(
                (data) =>
                    data.categories === "lunch" && (
                        <FoodItem key={data.id} {...data} />
                    )
            )}
        </>
    );
};

export default Lunch;
