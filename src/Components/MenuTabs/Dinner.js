import React from "react";
import fakedata from "../../fakedata/fakedata";
import FoodItem from "./FoodItem";

const Dinner = () => {
    return (
        <>
            {fakedata.map(
                (data) =>
                    data.categories === "dinner" && (
                        <FoodItem key={data.id} {...data} />
                    )
            )}
        </>
    );
};

export default Dinner;
