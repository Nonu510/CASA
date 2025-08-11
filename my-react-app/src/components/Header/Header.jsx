import { NavLink } from 'react-router-dom'
import logo from '../../assets/LOGOgrand.png'
import logop from '../../assets/LOGOpetit.png'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img className="logog" src={logo} alt="logo" />
            <img className="logop" src={logop} alt="logop" />
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
