import React from "react";
import fakedata from "../../fakedata/fakedata";
import FoodItem from "./FoodItem";

const Breakfast = () => {
    return (
        <>
            {fakedata.map(
                (data) =>
                    data.categories === "breakfast" && (
                        <FoodItem key={data.id} {...data} />
                    )
            )}
        </>
    );
};

export default Breakfast;
