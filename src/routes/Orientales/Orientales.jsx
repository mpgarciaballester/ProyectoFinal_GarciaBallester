import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const Orientales = () => {
    const [orientales, setOrientales] = useState({});

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
        .then((res) => res.json())
        .then((res) => setOrientales(res))
    }, [])

    return (
        <div>
            {typeof orientales.results === 'undefined' ? (
                <div>Cargando...</div>
            ) : (
                <div>
                    {orientales.results.map((espada) => {
                        const id = espada.url.split('/')[5];

                        return (
                            <li><Link to={`/orientales/${id}`}>{espada.name}</Link></li>
                        )
                    })}
                </div>
            )}
        </div>
    );
};

export default Orientales;