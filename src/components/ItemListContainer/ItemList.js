//import {Link} from 'react-router-dom';

const ItemList = ({ items }) => {
    return (
        <div>
            <ul className="Item-card">
                <li className="Item-picture"><img src={items.pictureUrl} alt={items.description}/></li>
                <li className="Item-title">{items.title}</li>
                <li className="Item-price">{items.price}</li>
            </ul>
        </div>
    );
};

export default ItemList;

//chequear como escribir bien <Link to="/item/{items.id}">