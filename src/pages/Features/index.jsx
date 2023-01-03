import styled from 'styled-components'
import { Link } from 'react-router-dom'
import KasaCarousel from '../../components/KasaCarousel/index.jsx';
import data from '../../assets/logements.json'
import {useSearchParams} from "react-router-dom";
import CollapsibleCard from '../../components/CollapsibleCard/index.jsx';

const FeaturesContainer = styled.div`
justify-content: left;
align-items: left;
color:#FF6060;
display: flex;
flex-direction: column;
margin-left: 20px;
`
const TagContainer = styled.div`
display : flex;
flex-direction:row;
background-color:#FF6060;
color: white;
width: 100px;
margin-left:10px;
margin-bottom:20px;
padding-left: 10px;
border-radius:5px;
`

const Card = styled.div`
margin-top:10px;
margin-left:10px;
margin-bottom: 20px;
height:200px;
width:200px;
position:relative;
background-color:#FF6060;
border-radius:10px;
`
const CardTitle = styled.p`
position: absolute;
bottom:2%;
left:2%;
color: white;
`
const EquipContainer = styled.div`
display:flex;
flex-direction: row;
margin-bottom:20px;
`
const Equip2Container = styled.div`
display:flex;
flex-direction: column;
margin-right: 20px;
margin-left: 10px;
width:40%;
list-style-type: none;
`
const AboutContainer = styled.div`
display:flex;
flex-direction: column;
width: 150%;
margin-bottom:20px;
`
const About2Container = styled.div`
display:flex;
flex-direction: column;
margin-left: 10px;
width:40%;
margin-bottom:20px;
`

function Features() {
    const [searchParams] = useSearchParams();
    const rentalId = searchParams.get('id');
    const rentalTag = searchParams.get('tag');
    const rental = data.find(({id}) => id === rentalId);
    const equipments = [];
    for (const [key, value] of Object.entries(rental.equipments)) {
        equipments.push(<li key={'equip-' + key}>{value}</li>);
    }
    const tab = [
        { title: 'Fiabilité'
  , description: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
},
{ title: 'Respect'
  , description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.'
},
      { title: 'Equipements'
        , description: equipments
      }]
      const rentalImages = rental.pictures;
    return (
      <FeaturesContainer>
        <TagContainer>{rentalTag}</TagContainer>
        <Card >
          <CardTitle>
        {rental.title}
        </CardTitle>
        </Card>
        <EquipContainer>
             <Equip2Container >
                <CollapsibleCard  title={tab[2].title} description={tab[2].description} />
                </Equip2Container>
                    <Equip2Container >
                <CollapsibleCard  title={tab[2].title} description={tab[2].description} />
                </Equip2Container>
        </EquipContainer>
        <AboutContainer>
                    <About2Container >
                <CollapsibleCard  title={tab[0].title} description={tab[0].description} />
                </About2Container>
                    <About2Container >
                <CollapsibleCard  title={tab[1].title} description={tab[1].description} />
                </About2Container>
        </AboutContainer>
    <KasaCarousel rentalId= {rentalId} rentalImg= {rentalImages} kasaWidth='700px'/>
      </FeaturesContainer>
    )
  }
  
  export default Features