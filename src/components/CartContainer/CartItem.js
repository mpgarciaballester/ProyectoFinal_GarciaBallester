import RemoveItemButton from './RemoveItemButton';

const CartItem = ({ item }) => {
    return (
        <div className="Cart-item">
            <img className="CartItem-picture" src={item.pictureUrl} alt={item.description}/>
            <ul className="CartItem-detail">
                <li className="Item-title">{item.title}</li>
                <li className="Item-price">${item.price}</li>
                <li className="Item-count">x{item.count}</li>
                <li><RemoveItemButton id={item.id} /></li>
            </ul>
        </div>
    );
};

export default CartItem;