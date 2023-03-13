import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

const categoriaList = ["orientales", "europeas", "ficción"]

const ItemListContainerId = () => {
    const { id } = useParams();
    const [categoria, setCategoria] = useState([]);

    useEffect(() => {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(categoriaList);
            }, 2000);
        });
        promise.then((res) => {
            setCategoria(res)
        });
    }, [id])

    //console.log(categoria[id -1])

    return (
        <div>
            <ItemListContainer categoryTitle= {categoria[id - 1]} categoryId={id}/>
        </div>
    );
};

export default ItemListContainerId;