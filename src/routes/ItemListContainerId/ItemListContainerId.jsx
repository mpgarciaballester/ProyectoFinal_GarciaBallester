import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const ItemListContainerId = () => {
    const { id } = useParams();
    const [orientales, setOrientales] = useState({});

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
        .then((res) => res.json())
        .then(setOrientales)
    }, [id])

    return (
        <div>
            <ItemListContainer category={orientales}/>
        </div>
    );
};

//no voy a usar el api, entonces como hacer para que distinga el id?

export default ItemListContainerId;