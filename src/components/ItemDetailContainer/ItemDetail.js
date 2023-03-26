import AddItem from './AddItem';

const ItemDetail = ({ item }) => {
    return (
        <div className="Itemdetailcontainer">
            <img className="Item-picture" src={item.pictureUrl} alt={item.description}/>
            <ul className="Item-detail">
                <li className="Item-title">{item.title}</li>
                <li className="Item-description">{item.description}</li>
                <li className="Item-price">${item.price}</li>
                <li><AddItem item={item}/></li>
            </ul>
        </div>
    );
};

export default ItemDetail;