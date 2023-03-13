import { useState, useEffect } from 'react';
import ItemList from './ItemList';

const orientales = [
    {
        id: 1,
        title: 'Katana',
        description: 'Espada katana japonesa',
        price: '$250 USD',
        pictureUrl: '../images/katana.jpg',
    },
    {
        id: 2,
        title: 'Wakizashi',
        description: 'Espada wakizashi japonesa',
        price: '$200 USD',
        pictureUrl: '../images/wakizashi.jpg',
    },
    {
        id: 3,
        title: 'Dao',
        description: 'Espada dao china',
        price: '$290 USD',
        pictureUrl: '../images/dao.jpg',
    },
    {
        id: 4,
        title: 'Tai Chi',
        description: 'Espada tai chi china',
        price: '$290 USD',
        pictureUrl: '../images/taichi.jpg',
    },
    {
        id: 5,
        title: 'Shamshir',
        description: 'Espada shamshir persa',
        price: '$290 USD',
        pictureUrl: '../images/shamshir.jpg',
    },
    {
        id: 6,
        title: 'Kris',
        description: 'Espada kris indonesia',
        price: '$290 USD',
        pictureUrl: '../images/kris.jpg',
    }
];
const europeas = [
    {
        id: 1,
        title: 'Zweihänder',
        description: 'Espada zweihänder alemana',
        price: '$300 USD',
        pictureUrl: '../images/zweihander.jpg',
    },
    {
        id: 2,
        title: 'Claymore',
        description: 'Espada claymore escocesa',
        price: '$280 USD',
        pictureUrl: '../images/claymore.jpg',
    },
    {
        id: 3,
        title: 'Briquet',
        description: 'Sable briquet francés',
        price: '$320 USD',
        pictureUrl: '../images/briquet.jpg',
    },
    {
        id: 4,
        title: 'Rapier',
        description: 'Espada ropera española',
        price: '$300 USD',
        pictureUrl: '../images/rapier.jpg',
    },
    {
        id: 5,
        title: 'Viking',
        description: 'Espada vikinga',
        price: '$280 USD',
        pictureUrl: '../images/viking.jpg',
    },
    {
        id: 6,
        title: 'Gladius',
        description: 'Espada gladius Romana',
        price: '$320 USD',
        pictureUrl: '../images/gladius.jpg',
    }
];
const ficcion = [
    {
        id: 1,
        title: 'Zweihänder',
        description: 'Espada zweihänder alemana',
        price: '$300 USD',
        pictureUrl: '../images/zweihander.jpg',
    },
    {
        id: 2,
        title: 'Claymore',
        description: 'Espada claymore escocesa',
        price: '$280 USD',
        pictureUrl: '../images/claymore.jpg',
    },
    {
        id: 3,
        title: 'Briquet',
        description: 'Sable briquet francés',
        price: '$320 USD',
        pictureUrl: '../images/briquet.jpg',
    },
    {
        id: 4,
        title: 'Rapier',
        description: 'Espada ropera española',
        price: '$300 USD',
        pictureUrl: '../images/rapier.jpg',
    },
    {
        id: 5,
        title: 'Viking',
        description: 'Espada vikinga',
        price: '$280 USD',
        pictureUrl: '../images/viking.jpg',
    },
    {
        id: 6,
        title: 'Gladius',
        description: 'Espada gladius Romana',
        price: '$320 USD',
        pictureUrl: '../images/gladius.jpg',
    }
];

const todos = [...orientales, ...europeas, ...ficcion]


const ItemListContainer = ({categoryTitle, categoryId}) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const promise = new Promise((resolve) => {
            if(categoryId==="1") {
                resolve(orientales);
            } else if(categoryId==="2") {
                resolve(europeas);
            } else if(categoryId==="3") {
                resolve(ficcion);
            } else{
                resolve(todos)
            }
        });
        promise.then((res) => {
            setList(res)
        });
    }, [categoryId]);

    return (
        <div>
            <h2>{categoryTitle}</h2>
            {list.map((categoria) => {
                return (
                    <li><ItemList items={categoria}/></li>
                )
            })};
            
        </div>
    )
};

export default ItemListContainer;

//no me toma resolve(categoryTitle), pero si me toma categoryTitle en otras instancias
//ahora si me lo toma pero solo el nombre del const en vez del contenido del array?? aunque no se en que momento aparecio porque trate de nuevo y no aparece; o escribo el comentario entonces como que lo carga de nuevo (pero no la pagina, la terminal) y ahi aparece el list solo como el nombre del const
//puse list.[1] y me tiraba a, estando en bastones, como que el elemento [1] de bastones es a, la segunda letra