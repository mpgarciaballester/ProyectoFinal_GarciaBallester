import {Link} from 'react-router-dom';
import logo from './logo.svg';
import CartWidget from './CartWidget'
import './navbar.css'
const NavBar = () => {
    return (
        <header>
            <div className="Nav">
                <div className="Brand">
                    <Link to="/"><img src={logo} className="App-logo" alt="logo" />
                    <p>Ósken</p></Link>
                </div>
            <ul>
                <li><Link to="/category/1">Orientales</Link></li>
                <li><Link to="/category/2">Europeas</Link></li>
                <li><Link to="/category/3">Ficción</Link></li>
            </ul>
            <CartWidget />
            </div>
        </header>
    )
};

export default NavBar;