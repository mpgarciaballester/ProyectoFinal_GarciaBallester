import {Link} from 'react-router-dom';

const ItemList = ({ items }) => {
    
    return (
        <div className="ItemCard">
            <Link to="/item/${items.id}">
            <ul>
                <li className="Item-picture" key={items.id}><img src={items.pictureUrl} alt={items.description}/></li>
                <li className="Item-title" key={items.id}>{items.title}</li>
                <li className="Item-price" key={items.id}>{items.price}</li>
            </ul>
            </Link>
        </div>
    );
};

export default ItemList;

//chequear como escribir bien el /item/id