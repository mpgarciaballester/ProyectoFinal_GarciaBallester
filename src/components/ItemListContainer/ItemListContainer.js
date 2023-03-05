import './itemlistcontainer.css';
import ItemCard from './ItemCard';
const ItemListContainer = ({greeting}) => {
    return (
        <div className="ItemList">
            <p>{greeting}</p>
            <ItemCard />
        </div>
    )
};

export default ItemListContainer;