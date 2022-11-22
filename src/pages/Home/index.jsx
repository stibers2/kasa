import styled from 'styled-components'
import data from '../../assets/logements.json'
import accueil_banner from '../../assets/accueil_banner.png'
import { Link } from 'react-router-dom'

const size = {
  mobile: '768px'
}
export const device = {
  mobile: `(max-width: ${size.mobile})`
};

const HomeContainer = styled.div`
align-items: center;
width:80%;
`

const CardsContainer = styled.div`
align-items: center;
width:80%;
justify-content:space-around;
display:flex;
flex-wrap: wrap;
@media ${device.mobile} { 
  display : flex;
flex-direction: column;
}
`
const Card = styled.div`
margin-top:50px;
margin-left:50px;
height:300px;
width:300px;
position:relative;
background-color:#FF6060;
`
const CardTitle = styled.p`
position: absolute;
bottom:2%;
left:2%;
color: white;
`

const imgStyle = {
  /*objectFit: 'contain',*/
  width: '100%',
  height:'100%',
};

function Home() {

  return (
    <HomeContainer>
    <img src={accueil_banner} alt="banner"></img>
    <CardsContainer>
      { 
      data.map ( content => 
        <Card>
          <Link to={`/rental?id=${content.id}`}>
          <img src={content.cover} style={imgStyle}/>
          <CardTitle>
        {content.title}
        </CardTitle>
        </Link>
        </Card>
        
      )
     
    }
    </CardsContainer>
    
    </HomeContainer>
  )
}

export default Home