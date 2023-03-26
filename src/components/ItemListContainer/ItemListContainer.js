import { useEffect, useState } from 'react';
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import ItemList from './ItemList';
import './itemlistcontainer.css';

const ItemListContainer = ({id, categoryTitle}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, 'items');
        const q = query(itemCollection, where('categoryId', '==', id));

        let show
        id === "" ? show = itemCollection : show = q

        getDocs(show).then((snapshotList) => {
            const docs = snapshotList.docs.map((snapshot) => ({
                id: snapshot.id,
                ...snapshot.data()
            }));
            setItems(docs);
        });

    }, [id]);

    return (
        <div className="Itemlistcontainer">
            <h2 className="Category-title">{categoryTitle}</h2>
            <div className="Item-list">
            {items.map((item) => {
                return (
                    <li key={item.id}><ItemList items={item}/></li>
                )
            })}
            </div>
        </div>
    );
};

export default ItemListContainer;