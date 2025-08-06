import { NavLink } from 'react-router-dom'
import logo from '../../assets/LOGOgrand.png'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img src={logo} alt="logo" />
            <nav>
                <NavLink 
                    to="/" 
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                    Accueil
                </NavLink>
                <NavLink 
                    to="/informations" 
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                >
                    A propos
                </NavLink>
            </nav>
        </div>
    )
}

export default Header
