import { useState, useEffect } from 'react';
import {getFirestore, doc, getDoc} from 'firebase/firestore';
import ItemDetail from './ItemDetail';
import './itemdetailcontainer.css';

const ItemDetailContainer = ({id}) => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, 'items', id);
        getDoc(itemRef).then((snapshot) => {
            const obj = {
                id: snapshot.id,
                ...snapshot.data()
            };
            setItem(obj);
        });
    }, [id]);

    return (
        <ItemDetail item={item} />
    )
};

export default ItemDetailContainer;