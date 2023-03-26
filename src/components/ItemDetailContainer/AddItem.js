import { useState, useContext } from 'react';
import {CartContext} from '../../contexts/CartContext';
import ItemCount from './ItemCount';

const AddItem = ({ item }) => {
    const {addToCart} = useContext(CartContext)
    const [cart, setCart] = useState(false);
    const [count, setCount] = useState(1);
    const notsaved = "/images/notsaved.svg";
    const saved = "/images/saved.svg";

    const onCountHandler = (cuenta) => {
        setCount(cuenta)
    };

    const clickHandler = () => {
        addToCart(item, count)
        
        setCart(!cart)
    };
    
    let src

    cart ? src = saved : src = notsaved

    return (
        <div>
            <ItemCount onCount={onCountHandler }/>
            <img onClick={clickHandler} src={src} className="Cart-icon" alt="cart" />
        </div>
    )
};

export default AddItem;