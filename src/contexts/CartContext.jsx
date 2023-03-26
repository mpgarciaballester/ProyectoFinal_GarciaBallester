import React, {useState} from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const CartContext = React.createContext();

const CartProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addToCart = (item, qty) => {
        const db = getFirestore();
        const order = collection(db, 'orders');
        for(let i = 0; i<qty; i++){
            addDoc(order, item);
        }
        setCartList()
    }

    const removeList = () => {

    }

    const deleteItem = (id) => {

    }


    return (
        <CartContext.Provider value={{cartList, addToCart, removeList, deleteItem}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider};