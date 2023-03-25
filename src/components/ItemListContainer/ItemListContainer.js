/*import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import './itemlistcontainer.css';

const orientales = [
    {
        id: 1,
        title: 'Katana',
        description: 'Espada katana japonesa',
        price: '$300 USD',
        pictureUrl: '/images/katana.jpg',
    },
    {
        id: 2,
        title: 'Wakizashi',
        description: 'Espada wakizashi japonesa',
        price: '$220 USD',
        pictureUrl: '/images/wakizashi.jpg',
    },
    {
        id: 3,
        title: 'Dao',
        description: 'Espada dao china',
        price: '$280 USD',
        pictureUrl: '/images/dao.jpg',
    },
    {
        id: 4,
        title: 'Tai Chi',
        description: 'Espada tai chi china',
        price: '$270 USD',
        pictureUrl: '/images/taichi.jpg',
    },
    {
        id: 5,
        title: 'Shamshir',
        description: 'Espada shamshir persa',
        price: '$290 USD',
        pictureUrl: '/images/shamshir.jpg',
    },
    {
        id: 6,
        title: 'Kris',
        description: 'Espada kris indonesia',
        price: '$260 USD',
        pictureUrl: '/images/kris.jpg',
    }
];
const europeas = [
    {
        id: 7,
        title: 'Zweihänder',
        description: 'Espada zweihänder alemana',
        price: '$300 USD',
        pictureUrl: '/images/zweihander.jpg',
    },
    {
        id: 8,
        title: 'Claymore',
        description: 'Espada claymore escocesa',
        price: '$280 USD',
        pictureUrl: '/images/claymore.jpg',
    },
    {
        id: 9,
        title: 'Briquet',
        description: 'Sable briquet francés',
        price: '$220 USD',
        pictureUrl: '/images/briquet.jpg',
    },
    {
        id: 10,
        title: 'Rapier',
        description: 'Espada ropera española',
        price: '$250 USD',
        pictureUrl: '/images/rapier.jpg',
    },
    {
        id: 11,
        title: 'Viking',
        description: 'Espada vikinga',
        price: '$230 USD',
        pictureUrl: '/images/viking.jpg',
    },
    {
        id: 12,
        title: 'Gladius',
        description: 'Espada gladius Romana',
        price: '$220 USD',
        pictureUrl: '/images/gladius.jpg',
    }
];
const fantasia = [
    {
        id: 13,
        title: 'Anduril',
        description: 'Espada Anduril de El Señor de los Anillos',
        price: '$210 USD',
        pictureUrl: '/images/anduril.jpg',
    },
    {
        id: 14,
        title: 'Sting',
        description: 'Espada Sting de El Señor de los Anillos',
        price: '$180 USD',
        pictureUrl: '/images/sting.jpg',
    },
    {
        id: 15,
        title: 'Orcrist',
        description: 'Espada Orcrist de El Hobbit',
        price: '$200 USD',
        pictureUrl: '/images/orcrist.jpg',
    },
    {
        id: 16,
        title: 'Needle',
        description: 'Espada Needle de Game of Thrones',
        price: '$130 USD',
        pictureUrl: '/images/needle.jpg',
    },
    {
        id: 17,
        title: 'Longclaw',
        description: 'Espada Longclaw de Game of Thrones',
        price: '$120 USD',
        pictureUrl: '/images/longclaw.jpg',
    },
    {
        id: 18,
        title: 'Excalibur',
        description: 'Excalibur, espada legendaria del Rey Arturo',
        price: '$140 USD',
        pictureUrl: '/images/excalibur.jpg',
    }
];

const todos = [...orientales, ...europeas, ...fantasia]


const ItemListContainer = ({categoryTitle, categoryId}) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const promise = new Promise((resolve) => {
            if(categoryId==="1") {
                resolve(orientales);
            } else if(categoryId==="2") {
                resolve(europeas);
            } else if(categoryId==="3") {
                resolve(fantasia);
            } else{
                resolve(todos)
            }
        });
        promise.then((res) => {
            setList(res)
        });
    }, [categoryId]);

    return (
        <div className="Itemlistcontainer">
            <h2 className="Category-title">{categoryTitle}</h2>
            <div className="Item-list">
            {list.map((categoria) => {
                return (
                    <li key={categoria.id}><ItemList items={categoria}/></li>
                )
            })}
            </div>
        </div>
    )
};*/


import { useEffect, useState } from 'react';
import {getFirestore, collection, getDocs} from 'firebase/firestore';

const ItemListContainer = ({id, categoryTitle}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, 'items');
        const q = query(itemCollection, where('categoryId', '==', id));
        getDocs(q).then((snapshotList) => {
            const docs = snapshotList.docs.map((snapshot) => ({
                id: snapshot.id,
                ...snapshot.data()
            }));
            setItems(docs)
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