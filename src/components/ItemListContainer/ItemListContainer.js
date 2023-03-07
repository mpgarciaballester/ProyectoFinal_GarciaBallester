import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import ItemList from './ItemList';

const itemList = {
    orientales: {
        id: 1,
        1: {
            id: 1,
            title: 'katana',
            description: 'katana japonesa',
            price: '$250 USD',
            pictureUrl: '../images/katana1.jpg',
        },
        2: {
            id: 2,
            title: 'wakizashi',
            description: 'wakizashi japonesa',
            price: '$200 USD',
            pictureUrl: '../images/wakizashi.jpg',
        },
        3: {
            id: 3,
            title: 'espada árabe',
            description: 'espada árabe',
            price: '$290 USD',
            pictureUrl: '../images/arabe1.jpg',
        }
    },
    europeas: {
        id: 2,
        1: {
            id: 1,
            title: 'espada inglesa',
            description: 'espada inglesa',
            price: '$300 USD',
            pictureUrl: '../images/inglesa.jpg',
        },
        2: {
            id: 2,
            title: 'espada francesa',
            description: 'espada francesa',
            price: '$280 USD',
            pictureUrl: '../images/fracesa1.jpg',
        },
        3: {
            id: 3,
            title: 'espada alemana',
            description: 'espada alemana',
            price: '$320 USD',
            pictureUrl: '../images/alemana.jpg',
        }
    },
    bastones: {
        id: 3,
        1: {
            id: 1,
            title: 'espada inglesa',
            description: 'espada inglesa',
            price: '$300 USD',
            pictureUrl: '../images/inglesa.jpg',
        },
        2: {
            id: 2,
            title: 'espada francesa',
            description: 'espada francesa',
            price: '$280 USD',
            pictureUrl: '../images/fracesa1.jpg',
        },
        3: {
            id: 3,
            title: 'espada alemana',
            description: 'espada alemana',
            price: '$320 USD',
            pictureUrl: '../images/alemana.jpg',
        },
    }
};


const ItemListContainer = ({category}) => {
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
        <div>
            <h2>{category}</h2>
            {list.orientales.map((categoria) => {
                const id = categoria.id;

                    return (
                        <li><Link to={`/category/${id}`}><ItemList items={categoria}/></Link></li>
                    )
            })};
            
        </div>
    )
};

//en list.orientales iria {category} pero me tira error, tengo que ver como plantearlo bien para pasar el parametro

export default ItemListContainer;