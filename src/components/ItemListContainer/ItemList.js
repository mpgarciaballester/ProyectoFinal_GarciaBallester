const ItemList = ({ items }) => {
    return (
        <div>
                {items.map((item) => (
            <ul>
                <li className="Item-picture" key={item.id}><img src={item.pictureUrl} alt={item.description}/></li>
                <li className="Item-title" key={item.id}>{item.title}</li>
                <li className="Item-description" key={item.id}>{item.description}</li>
                <li className="Item-price" key={item.id}>{item.price}</li>
            </ul>
                ))}
        </div>
    );
};

export default ItemList;