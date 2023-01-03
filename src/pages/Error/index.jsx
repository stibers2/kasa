import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './index.css';


const TitleContainer = styled.h1`
size: 200px;
font-size:200px;
`
const linkStyle = {
  color: 'inherit',
};


function Error() {

    return (
      <div className="errorContainer">
      <TitleContainer classname="titleContainer">404</TitleContainer>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/" style={linkStyle}>
        Retourner sur la page d'accueil
        </Link>
      </div>
    )
  }
  
  export default Error