import cart from './cart.svg';
import './navbar.css'
const CartWidget = () => {
    return (
        <div className="App-cart">
            <p className="Cart-num">3</p>
            <img src={cart} className="Cart-icon" alt="cart" />
        </div>
    )
};

export default CartWidget;