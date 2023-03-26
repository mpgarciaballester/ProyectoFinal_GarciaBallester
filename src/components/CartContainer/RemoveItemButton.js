import { getFirestore, doc, deleteDoc } from "firebase/firestore";

const RemoveItemButton = ({id}) => {
    const clickHandler = () => {
        const db = getFirestore();
        const itemRef = doc(db, 'orders', id)
        deleteDoc(itemRef)
        console.log(id)
    }


    return (
        <div onClick={clickHandler}>
            <img className="Bin" src="/images/bin.svg" alt="eliminar item" />
        </div>
    )
};

export default RemoveItemButton;