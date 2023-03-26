import { useContext} from 'react';
import CartItem from './CartItem';
import ContactForm from './ContactForm';
import './cartcontainer.css'
import { CartContext } from '../../contexts/CartContext';

const CartContainer = () => {
    const {cartList} = useContext(CartContext)

    let total = 0

    for(let i=0; i<cartList.length; i++) {
        total += cartList[i].price*cartList[i].count
    }

    return (
        <div className="Cart-container">
            <h2 className="Category-title">Compra</h2>
            <div className="Cart-list">
            {cartList.map((item) => {
                return (
                    <li key={item.id}><CartItem item={item}/></li>
                )
            })}
            </div>
            <p>TOTAL: ${total}</p>
            <ContactForm />
        </div>
    );
};

export default CartContainer;