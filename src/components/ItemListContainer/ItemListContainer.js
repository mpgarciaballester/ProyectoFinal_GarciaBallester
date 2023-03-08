import { useState, useEffect } from 'react';
//import {Link} from 'react-router-dom';
//import ItemList from './ItemList';

const orientales = [
    {
        id: 1,
        title: 'katana',
        description: 'katana japonesa',
        price: '$250 USD',
        pictureUrl: '../images/katana1.jpg',
    },
    {
        id: 2,
        title: 'wakizashi',
        description: 'wakizashi japonesa',
        price: '$200 USD',
        pictureUrl: '../images/wakizashi.jpg',
    },
    {
        id: 3,
        title: 'espada árabe',
        description: 'espada árabe',
        price: '$290 USD',
        pictureUrl: '../images/arabe1.jpg',
    }
];
const europeas = [
    {
        id: 1,
        title: 'espada inglesa',
        description: 'espada inglesa',
        price: '$300 USD',
        pictureUrl: '../images/inglesa.jpg',
    },
    {
        id: 2,
        title: 'espada francesa',
        description: 'espada francesa',
        price: '$280 USD',
        pictureUrl: '../images/fracesa1.jpg',
    },
    {
        id: 3,
        title: 'espada alemana',
        description: 'espada alemana',
        price: '$320 USD',
        pictureUrl: '../images/alemana.jpg',
    }
];
const bastones = [
    {
        id: 1,
        title: 'espada inglesa',
        description: 'espada inglesa',
        price: '$300 USD',
        pictureUrl: '../images/inglesa.jpg',
    },
    {
        id: 2,
        title: 'espada francesa',
        description: 'espada francesa',
        price: '$280 USD',
        pictureUrl: '../images/fracesa1.jpg',
    },
    {
        id: 3,
        title: 'espada alemana',
        description: 'espada alemana',
        price: '$320 USD',
        pictureUrl: '../images/alemana.jpg',
    },
];

const ItemListContainer = ({categoryTitle, categoryId}) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(categoryTitle);
            }, 2000);
        });
        promise.then((res) => {
            setList(res)
        });
    }, []);

    console.log(list)
    console.log(categoryId - 1)
    console.log(categoryTitle)

    return (
        <h2>{categoryTitle}</h2>
    )

    /*return (
        <div>
            <h2>{categoryTitle}</h2>
            {list[categoryId - 1].map((categoria) => {
                const id = categoria.id;

                    return (
                        <li><Link to={`/category/${id}`}><ItemList items={categoria}/></Link></li>
                    )
            })};
            
        </div>
    )*/
};

export default ItemListContainer;

//no me toma resolve(categoryTitle), pero si me toma categoryTitle en otras instancias
//ahora si me lo toma pero solo el nombre del const en vez del contenido del array?? aunque no se en que momento aparecio porque trate de nuevo y no aparece; o escribo el comentario entonces como que lo carga de nuevo (pero no la pagina, la terminal) y ahi aparece el list solo como el nombre del const
//puse list.[1] y me tiraba a, estando en bastones, como que el elemento [1] de bastones es a, la segunda letra