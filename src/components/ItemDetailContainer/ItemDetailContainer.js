import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import './itemdetailcontainer.css';

const items = [
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
    },
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
    },
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


const ItemDetailContainer = ({categoryId}) => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        const promise = new Promise((resolve) => {
            resolve(items[categoryId-1]);
        });
        promise.then((res) => {
            setItem(res)
        });
    }, [categoryId]);

    return (
        <ItemDetail item={item} />
    )
};

export default ItemDetailContainer;