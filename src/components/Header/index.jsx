import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/.LOGO.svg'


const HeaderContainer = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color:#FF6060;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const linkStyle = {
  paddingLeft: '20px',
  color: 'inherit',
  textDecorationLine: 'none',
};

function Header() {

  return (
    <HeaderContainer>
      <img src={logo} alt="logo kasa"></img>
      <NavContainer>
        <Link to="/" style={linkStyle}>
          Accueil
        </Link>
        <Link to="/about" style={linkStyle}>
          A propos
        </Link>
      </NavContainer>
    </HeaderContainer>
  )
}

export default Header