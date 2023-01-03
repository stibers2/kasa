import styled from 'styled-components'
import about_banner from '../../assets/about_banner.png'
import './index.css';
import {useState} from 'react';
import CollapsibleCard from '../../components/CollapsibleCard/index.jsx';


const AboutContainer = styled.div`
  color:#FF6060;
  width:80%;
  justify-content: center;
  align-items: center;
  display:flex;
  flex-direction:column;
`
const AboutCard = styled.div`
display:flex;
flex-direction:column;
width: 100%;
`
const AboutTitle = styled.div`
  background-color:#FF6060;
  color:white;
  display : flex;
  flex-direction:row;
  justify-content: space-between;
  border-radius:5px;
  padding-left: 5px;
`
const AboutParagraph = styled.div`
  background-color:#F6F6F6;
  color:#FF6060;
  padding: 10px 5px 10px 5px;
`



/*https://blog.openreplay.com/creating-a-collapsible-component-for-react/*/
/*https://stackoverflow.com/questions/65962766/animate-card-rotating-on-button-click-in-react*/
/*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/*/
function About() {
  const [open1, setOPen1] = useState(true);
  const toggle1 = () => {
    setOPen1(!open1);
  };
  const [open2, setOPen2] = useState(true);
  const toggle2 = () => {
    setOPen2(!open2);
  };
    const [open3, setOPen3] = useState(true);
    const toggle3 = () => {
      setOPen3(!open3);
    };
    const [open4, setOPen4] = useState(true);
    const toggle4 = () => {
      setOPen4(!open4);
    };
const tab = [
  { title: 'Fiabilité'
  , description: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
},
{ title: 'Respect'
  , description: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.'
},
{ title: 'Service'
  , description: 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N hésitez pas à nous contacter si vous avez la moindre question.'
},
{ title: 'Sécurité'
  , description: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l hôte qu au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
},
]
  return (
    <AboutContainer>
      <img src={about_banner} alt="banner" className="banner"></img>
      <AboutCard ><CollapsibleCard  title={tab[0].title} description={tab[0].description} /></AboutCard>
      <AboutCard ><CollapsibleCard  title={tab[1].title} description={tab[1].description} /></AboutCard>
      <AboutCard ><CollapsibleCard  title={tab[2].title} description={tab[2].description} /></AboutCard>
      <AboutCard ><CollapsibleCard  title={tab[3].title} description={tab[3].description} /></AboutCard>
    </AboutContainer>
  )
}

export default About