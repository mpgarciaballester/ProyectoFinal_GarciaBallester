import React, {useState} from 'react';

const CartContext = React.createContext();

const CartProvider = ({children}) => {
    const [cart] = useState([]);

    return (
        <CartContext.Provider value={{cart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider};