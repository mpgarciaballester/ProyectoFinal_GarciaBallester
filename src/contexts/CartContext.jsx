import React, {useState} from 'react';
import { getFirestore, doc, collection, getDocs, addDoc, deleteDoc } from 'firebase/firestore';

const CartContext = React.createContext();

const CartProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    //const [total, setTotal] = useState(0)

    const addToCart = (item, qty) => {
        const obj = {
            ...item,
            count: qty
        };
        const db = getFirestore();
        const order = collection(db, 'cartitems');
        addDoc(order, obj);
    }

    const deleteItem = (id) => {
        const db = getFirestore();
        const itemRef = doc(db, 'cartitems', id)
        deleteDoc(itemRef)
    }
    
    const db = getFirestore();
    const itemCollection = collection(db, 'cartitems');
    getDocs(itemCollection).then((snapshotList) => {
        const docs = snapshotList.docs.map((snapshot) => ({
            ...snapshot.data(),
            id: snapshot.id
        }));
        setCartList(docs);
    });

    /*let suma = 0
    for(let i=0; i<cartList.length; i++) {
        suma += cartList[i].price*cartList[i].count
    };
    setTotal(suma);*/
    
    return (
        <CartContext.Provider value={{cartList,addToCart, deleteItem}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider};