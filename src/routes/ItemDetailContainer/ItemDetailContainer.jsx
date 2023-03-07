import { useState, useEffect } from 'react';
import ItemList from './ItemDetail';

const itemList = [
    {
        id: 1,
        title: 'katana',
        description: 'katana japonesa',
        price: '$250 USD',
        pictureUrl: '../images/katana1.jpg',
    },
    {
        id: 2,
        title: 'espada inglesa',
        description: 'espada inglesa',
        price: '$300 USD',
        pictureUrl: '../images/inglesa.jpg',
    },
    {
        id: 3,
        title: 'wakizashi',
        description: 'wakizashi japonesa',
        price: '$200 USD',
        pictureUrl: '../images/wakizashi.jpg',
    },
    {
        id: 4,
        title: 'espada alemana',
        description: 'espada alemana',
        price: '$320 USD',
        pictureUrl: '../images/alemana.jpg',
    },
    {
        id: 5,
        title: 'espada árabe',
        description: 'espada árabe',
        price: '$290 USD',
        pictureUrl: '../images/arabe1.jpg',
    },
    {
        id: 6,
        title: 'espada francesa',
        description: 'espada francesa',
        price: '$280 USD',
        pictureUrl: '../images/fracesa1.jpg',
    },
];

const ItemDetailContainer = ({greeting}) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(itemList);
            }, 2000);
        });
        promise.then((res) => {
            setList(res)
        });
    }, []);

    return (
        <div className="ItemList">
            <p>{greeting}</p>
            <ItemList items={list}/>
            
        </div>
    )
};

export default ItemDetailContainer;