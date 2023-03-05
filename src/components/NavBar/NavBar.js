import logo from './logo.svg';
import CartWidget from './CartWidget'
import './navbar.css'
const NavBar = () => {
    return (
        <header>
            <div className="Nav">
                <div className="Brand">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Ósken</p>
                </div>
            <ul>
                <li><a href="">Orientales</a></li>
                <li><a href="">Europeas</a></li>
                <li><a href="">Bastones</a></li>
                <li><a href="">Ficción</a></li>
                <li><a href="">Expositores de espadas</a></li>
            </ul>
            <CartWidget />
            </div>
        </header>
    )
};

export default NavBar;