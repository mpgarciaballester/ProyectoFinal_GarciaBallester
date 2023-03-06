import {Link} from 'react-router-dom';
import cart from './cart.svg';
import './navbar.css'
const CartWidget = () => {
    return (
        <div className="App-cart">
            <p className="Cart-num">3</p>
            <Link to="cart"><img src={cart} className="Cart-icon" alt="cart" /></Link>
        </div>
    )
};

export default CartWidget;