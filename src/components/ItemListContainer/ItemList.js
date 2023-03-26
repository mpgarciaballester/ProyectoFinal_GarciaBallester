import {Link} from 'react-router-dom';

const ItemList = ({ items }) => {
    return (
        <Link to={`/item/${items.id}`}>
        <div>
            <ul className="Item-card">
                <li><img src={items.pictureUrl} alt={items.description}/></li>
                <li className="Item-title">{items.title}</li>
                <li className="Item-price">${items.price}</li>
            </ul>
        </div>
        </Link>
    );
};

export default ItemList;