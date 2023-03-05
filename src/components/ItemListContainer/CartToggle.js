import { useState } from 'react';
import cart from '../images/cart.svg';
import incart from '../images/incart.svg';

const CartToggle = () => {
    const [saved, setSaved] = useState(false);

    const clickHandler = () => {
        setSaved(!saved)
    };

    let src

    saved ? src = cart : src = incart

    return (
        <div onClick={clickHandler}>
            <img src={src} className="Cart-icon" alt="cart" />
        </div>
    )
};

export default CartToggle;