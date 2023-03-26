import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const RemoveItemButton = ({id}) => {
    const {deleteItem} = useContext(CartContext)

    const clickHandler = () => {
        deleteItem(id)
    }


    return (
        <div onClick={clickHandler}>
            <img className="Bin" src="/images/bin.svg" alt="eliminar item" />
        </div>
    )
};

export default RemoveItemButton;