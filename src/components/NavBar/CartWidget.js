import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../../contexts/CartContext';
import './navbar.css'
const CartWidget = () => {
    const cartContext = useContext(CartContext)

    return (
        <div className="App-cart">
            <p className="Cart-num">{cartContext.length}</p>
            <Link to="cart"><img src="/images/saved.svg" className="Cart-icon" alt="carrito" /></Link>
        </div>
    )
};

export default CartWidget;