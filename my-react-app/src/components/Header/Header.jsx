import { Link } from 'react-router-dom'
import logo from '../../assets/LOGOgrand.png'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img src={logo} alt="logo" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/informations">A propos</Link>
            </nav>
        </div>
    )
}

export default Header