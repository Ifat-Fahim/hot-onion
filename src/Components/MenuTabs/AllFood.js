import React, { useState } from "react";
import fakedata from "../../fakedata/fakedata";
import Category from "./Category";
import Menu from "./Menu";
import "./MenuTabs.css";

const AllFood = () => {
    const allCategories = [
        "all",
        ...new Set(fakedata.map((data) => data.categories)),
    ];
    console.log(allCategories);
    const [menu, setMenu] = useState(fakedata);
    const [categories, setCategories] = useState(allCategories);
    const filterCategory = (category) => {
        if (category === "all") {
            setMenu(fakedata);
            return;
        }
        const filteredItems = fakedata.filter(
            (data) => data.categories.toLowerCase() === category.toLowerCase()
        );
        setMenu(filteredItems);
    };
    return (
        <>
            <Category categories={categories} filterCategory={filterCategory} />
            <div className="menu">
                {menu.map((singleMenu) => (
                    <Menu key={singleMenu.id} {...singleMenu} />
                ))}
            </div>
        </>
    );
};

export default AllFood;
