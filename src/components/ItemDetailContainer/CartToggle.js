import { useState } from 'react';
//import cart from '/images/cart.svg';
//import incart from '/images/incart.svg';

const CartToggle = () => {
    const [cart, setCart] = useState(false);
    const notsaved = "/images/notsaved.svg"
    const saved = "/images/saved.svg"

    const clickHandler = () => {
        setCart(!cart)
    };

    let src

    cart ? src = saved : src = notsaved

    return (
        <div onClick={clickHandler}>
            <img src={src} className="Cart-icon" alt="cart" />
        </div>
    )
};

export default CartToggle;