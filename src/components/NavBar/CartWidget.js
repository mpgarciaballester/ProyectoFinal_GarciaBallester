import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../../contexts/CartContext';
import cart from './cart.svg';
import './navbar.css'
const CartWidget = () => {
    const cartContext = useContext(CartContext)

    return (
        <div className="App-cart">
            <p className="Cart-num">{cartContext.length}</p>
            <Link to="cart"><img src={cart} className="Cart-icon" alt="cart" /></Link>
        </div>
    )
};

export default CartWidget;

//<p className="Cart-num">3</p>