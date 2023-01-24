import { Link } from 'react-router-dom'
import logo from '../../assets/.LOGO.svg'
import './index.css';



function Header() {

  return (
    <div className="headerContainer">
      <img src={logo} alt="logo kasa" className="logo_kasa"></img>
      <div className="navContainer">
        <Link to="/" className="linkStyle">
          Accueil
        </Link>
        <Link to="/about" className="linkStyle">
          A propos
        </Link>
      </div>
    </div>
  )
}

export default Header