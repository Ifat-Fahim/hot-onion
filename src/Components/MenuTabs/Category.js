import React from "react";
import "./MenuTabs.css";

const Category = ({ categories, filterCategory }) => {
    return (
        <div className="category">
            {categories.map((category, index) => (
                <button key={index} onClick={() => filterCategory(category)}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Category;
