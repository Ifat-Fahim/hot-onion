import React, { createContext, useState } from "react";
import fakedata from "../fakedata/fakedata";

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
    const [allFood, setAllFood] = useState(fakedata);
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);

    const addToCart = (id, quantity) => {
        const selectedItem = allFood.find(
            (food) => Number(food.id) === Number(id)
        );
        const isExist = cart.find((item) => Number(item.id) === Number(id));
        if (isExist) {
            selectedItem.quantity += quantity;
            selectedItem.totalPrice = (
                selectedItem.price * selectedItem.quantity
            ).toFixed(2);
            setCart([...cart]);
            setQuantity(0);
        } else {
            selectedItem.quantity = quantity;
            selectedItem.totalPrice = (selectedItem.price * quantity).toFixed(
                2
            );
            setCart([...cart, selectedItem]);
            setQuantity(0);
        }
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, quantity, setQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
