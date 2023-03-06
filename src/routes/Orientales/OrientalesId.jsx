import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const OrientalesId = () => {
    const { id } = useParams();
    const [orientales, setOrientales] = useState({});

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
        .then((res) => res.json())
        .then(setOrientales)
    }, [id])

    return (
        <div>
            Name: {orientales.name}
        </div>
    );
};

export default OrientalesId;