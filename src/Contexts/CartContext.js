import React, { createContext, useState } from "react";
import fakedata from "../fakedata/fakedata";

export const CartContext = createContext();
const CartContextProvider = ({ children }) => {
    const [allFood, setAllFood] = useState(fakedata);
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [hasCheckout, setHasCheckout] = useState(false);
    const [formInfo, setFormInfo] = useState({
        name: "",
        address: "",
        phone: "",
        desc: "",
    });

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

    // Increase quantity in cart
    const increaseQuantity = (id) => {
        const item = cart.find(
            (cartItem) => Number(cartItem.id) === Number(id)
        );
        item.quantity += 1;
        item.totalPrice = (item.price * item.quantity).toFixed(2);
        setCart([...cart]);
    };

    //Decrease quantity in cart
    const decreaseQuantity = (id) => {
        const item = cart.find(
            (cartItem) => Number(cartItem.id) === Number(id)
        );
        if (item.quantity >= 1) {
            item.quantity -= 1;
        }
        if (item.quantity === 0) {
            const filteredCart = cart.filter(
                (item) => Number(item.id) !== Number(id)
            );
            setCart([...filteredCart]);
            return;
        }
        item.totalPrice = (item.price * item.quantity).toFixed(2);
        setCart([...cart]);
    };

    //Remove a item

    const removeItem = (id) => {
        const removedItem = cart.filter(
            (item) => Number(item.id) !== Number(id)
        );
        setCart([...removedItem]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addToCart,
                quantity,
                setQuantity,
                increaseQuantity,
                decreaseQuantity,
                removeItem,
                hasCheckout,
                setHasCheckout,
                formInfo,
                setFormInfo,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
