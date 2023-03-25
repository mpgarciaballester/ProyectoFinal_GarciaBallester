import { useState } from 'react';

const ItemCount = () => {
    const [counter, setCounter] = useState(1)

    const restar = () => {
        counter !== 1 && setCounter(counter - 1)
    }

    const sumar = () => {
        setCounter(counter + 1)
    }

    return (
        <div className="Item-count">
            <button onClick={restar}>-</button>
            <p>{counter}</p>
            <button onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount;