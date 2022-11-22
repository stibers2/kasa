import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ErrorContainer = styled.div`
justify-content: center;
align-items: center;
color:#FF6060;
display: flex;
flex-direction: column;
`
const TitleContainer = styled.h1`
size: 200px;
font-size:200px;
`
const linkStyle = {
  color: 'inherit',
};


function Error() {

    return (
      <ErrorContainer>
      <TitleContainer classname="title">404</TitleContainer>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/" style={linkStyle}>
        Retourner sur la page d'accueil
        </Link>
      </ErrorContainer>
    )
  }
  
  export default Error