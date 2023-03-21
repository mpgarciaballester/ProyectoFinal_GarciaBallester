import { useEffect} from 'react';
import { useParams } from "react-router-dom";
import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';

const ItemDetailContainerId = () => {
    const { id } = useParams();
    
    useEffect(() => {
    }, [id])

    return (
        <ItemDetailContainer categoryId={id}/>
    );
};

export default ItemDetailContainerId;