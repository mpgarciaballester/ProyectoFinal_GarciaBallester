import { collection, getFirestore } from "firebase/firestore";
import { useState } from "react";

const ContactForm = () => {
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

        const db = getFirestore();
        const contactFormCollection = collection(db, 'contactform')
        addDoc(contactFormCollection, form).then((snapshot) => {
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
            <button>Enviar</button>
        </form>
        </div>
    )
};

export default ContactForm;