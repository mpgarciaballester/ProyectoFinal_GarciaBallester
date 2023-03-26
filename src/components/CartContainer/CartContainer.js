import { useEffect, useState } from 'react';
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import CartItem from './CartItem';
import ContactForm from './ContactForm';
import './cartcontainer.css'

const CartContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, 'orders');
        getDocs(itemCollection).then((snapshotList) => {
            const docs = snapshotList.docs.map((snapshot) => ({
                ...snapshot.data(),
                id: snapshot.id
            }));
            setItems(docs);
        });

    }, [items]);

    let total = 0

    for(let i=0; i<items.length; i++) {
        total += items[i].price
    }

    return (
        <div className="Cart-container">
            <h2 className="Category-title">Compra</h2>
            <div className="Cart-list">
            {items.map((item) => {
                
                return (
                    <li key={item.id}><CartItem item={item}/></li>
                )
            })}
            </div>
            <p>TOTAL: ${total}</p>
            <ContactForm />
        </div>
    );
};

export default CartContainer;