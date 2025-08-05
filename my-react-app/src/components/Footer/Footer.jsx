import logowhite from '../../assets/LOGOwhite.png'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <img src={logowhite} alt="logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer