import React, { useState, createContext } from 'react';
import { PRODUCTS } from '../Products';


const UserAuthContext = createContext();

const getDefaultCart = () => {
    let cart = {};
    for (let x = 1; x <= PRODUCTS.length; x++) {
        cart[x] = 0;
    }
    return cart;
};

const ShopContext = (props) => {
    
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const contextValue = { addToCart, removeFromCart, cartItems };

    return (
        <UserAuthContext.Provider value={contextValue}>
            {props.children}
        </UserAuthContext.Provider>
    );
};

export default ShopContext;
