import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {CartContext} from '../../contexts/CartContext';
import './navbar.css'
const CartWidget = () => {
    const {cartList} = useContext(CartContext)

    let total = 0

    for(let i=0; i<cartList.length; i++) {
        total += cartList[i].count
    }

    return (
        <div className="App-cart">
            <p className="Cart-num">{total}</p>
            <Link to="cart"><img src="/images/saved.svg" className="Cart-icon" alt="carrito" /></Link>
        </div>
    )
};

export default CartWidget;