import { useState } from 'react';

const ItemCount = () => {
    const [counter, setCounter] = useState(0)

    const restar = () => {
        counter != 0 && setCounter(counter - 1)
    }

    const sumar = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <button onClick={restar}>-</button>
            <p>{counter}</p>
            <button onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCount;