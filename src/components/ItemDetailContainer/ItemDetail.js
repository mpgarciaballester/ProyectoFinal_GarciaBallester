import CartToggle from '../ItemListContainer/CartToggle';
import katana from '../images/katana1.jpg';
import ItemCount from '../ItemListContainer/ItemCount'

const ItemDetail = () => {
    return (
        <div className="Product-card">
            <img src={katana} className="Product-image" alt="katana" />
            <h3>Katana</h3>
            <p>descripción</p>
            <p>$250.00 USD</p>
            <CartToggle />
            <ItemCount />
        </div>
    )
};

export default ItemDetail;