import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './navbar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <img src={logo} alt="Logo" className="me-2" style={{ height: '40px' }} />
                    <span className="title-brand">Blozzard</span>
                </Link>

                <ul className="navbar-nav me-auto mb-2 mb-lg-0 categories">
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/MMORPG">MMORPG</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/Shooter">Shooter</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/RPG">RPG</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/category/Estrategia">Estrategia</Link>
                    </li>
                </ul>
                
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
