import styled from 'styled-components'
import data from '../../assets/logements.json'
import accueil_banner from '../../assets/accueil_banner.png'
import { Link } from 'react-router-dom'
import './home.css'


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
    <div className="homeContainer">
    <img src={accueil_banner} alt="banner" className="banner"></img>
    <div className="cardsContainer">
      { 
      data.map ( (content, index) =>
        <Card key={"card-" + index}>
          <Link to={`/rental/${content.id}`}>
          <img src={content.cover} alt="rental" style={imgStyle}/>
          <CardTitle>
        {content.title}
        </CardTitle>
        </Link>
        </Card>
        
      )
     
    }
    </div>
    
    </div>
  )
}

export default Home