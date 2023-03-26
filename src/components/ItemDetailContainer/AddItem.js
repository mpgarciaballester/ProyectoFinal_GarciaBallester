import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { useState, useContext } from 'react';
//import {CartContext} from '../../contexts/CartContext';
import ItemCount from '../ItemCount/ItemCount';

const AddItem = ({ item }) => {
    //const cartContext = useContext(CartContext)
    const [cart, setCart] = useState(false);
    const [count, setCount] = useState();
    const notsaved = "/images/notsaved.svg";
    const saved = "/images/saved.svg";

    const onCountHandler = (cuenta) => {
        setCount(cuenta)
    };

    const clickHandler = () => {
        
        const db = getFirestore();
        const order = collection(db, 'orders');
        for(let i = 0; i<count; i++){
            addDoc(order, item);
        }
        //cartContext.AddToCart(item, count)
        
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