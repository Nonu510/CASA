import { Link } from 'react-router-dom'
 
function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/informations">A propos</Link>
        </nav>
    )
}

export default Header