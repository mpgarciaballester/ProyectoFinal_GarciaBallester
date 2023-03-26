import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

const ContactForm = () => {
    const {cartList} = useContext(CartContext);

    const formBase = {
        name: '',
        lastname: '',
        phone: '',
        email: ''
    };

    const [form, setForm] = useState(formBase);
    const [id, setId] = useState()

    const submitHandler = (ev) => {
        ev.preventDefault();

        let total = 0
        for(let i=0; i<cartList.length; i++) {
        total += cartList[i].price*cartList[i].count
        }

        const order = {
            buyer: form,
            items: cartList,
            date: Date.now(),
            total: total
        }

        const db = getFirestore();
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order).then((snapshot) => {
            setForm(formBase)
            setId(snapshot.id)
        })
    }

    const inputChangeHandler = (ev) => {
        const {value, name} = ev.target
        setForm({...form, [name]: value})
    }

    return (
        <div>
        {typeof id!== "undefined" ? (<p>Orden realizada! Tu ID de compra es: {id}</p>) : ('')}
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="name">Nombre</label>
                <input
                    name="name"
                    id="name"
                    value={form.name}
                    onChange={inputChangeHandler}
                />
            </div>
            <div>
                <label htmlFor="lastname">Apellido</label>
                <input
                    name="lastname"
                    id="lastname"
                    value={form.lastname}
                    onChange={inputChangeHandler}
                />
            </div>
            <div>
                <label htmlFor="phone">Teléfono</label>
                <input
                    name="phone"
                    id="phone"
                    value={form.phone}
                    onChange={inputChangeHandler}
                />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="name"
                    value={form.email}
                    onChange={inputChangeHandler}
                />
            </div>
            <button>Comprar</button>
        </form>
        </div>
    )
};

export default ContactForm;