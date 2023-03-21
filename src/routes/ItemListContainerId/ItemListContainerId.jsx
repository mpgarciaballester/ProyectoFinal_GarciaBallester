import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const categoriaList = ["orientales", "europeas", "fantasía"]

const ItemListContainerId = () => {
    const { id } = useParams();
    const [categoria, setCategoria] = useState([]);

    useEffect(() => {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(categoriaList);
            }, 1000);
        });
        promise.then((res) => {
            setCategoria(res)
        });
    }, [id])

    return (
        <ItemListContainer categoryTitle= {categoria[id - 1]} categoryId={id}/>
    );
};

export default ItemListContainerId;