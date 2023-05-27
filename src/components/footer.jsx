// import { Link } from 'react-router-dom'
import '../style/footer.css'
import FooterLogo from '../assets/footer_logo.svg'

function Footer() {
      return (
            <footer>
                  <img src={FooterLogo} alt="" className="kasa-logo-footer" />
                  <p className="credits">© 2020 Kasa. All rights reserved</p>
            </footer>
      )
}

export default Footer
