import { Link } from 'react-router-dom'
import '../style/header.css'
import Logo from '../assets/logo.svg'

function Header() {
      return (
            <header className="kasa-header">
                  <img src={Logo} alt="" className="kasa-logo" />
                  <nav>
                        <ul className="kasa-nav">
                              <Link to="/">
                                    <li className="kasa-li">Accueil</li>
                              </Link>
                              <Link to="/about">
                                    <li className="kasa-li">A propos</li>
                              </Link>
                        </ul>
                  </nav>
            </header>
      )
}

export default Header
