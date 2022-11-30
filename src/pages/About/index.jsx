import styled from 'styled-components'
import about_banner from '../../assets/about_banner.png'
import { AiOutlineUp } from "react-icons/ai";
import './index.css';
import { CCollapse } from '@coreui/react';
import {useState} from 'react';
import { CButton } from '@coreui/react'
import useCollapse from "react-collapsed";


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
const bannerStyle = {
  width: '100%',
};

/*https://stackoverflow.com/questions/65962766/animate-card-rotating-on-button-click-in-react*/
/*https://blog.logrocket.com/create-collapsible-react-components-react-collapsed/*/
function About() {
  const [isExpanded, setIsExpanded] = useState(true)
    const {getToggleProps, getCollapseProps} = useCollapse({isExpanded});
  return (
    <AboutContainer>
      <img src={about_banner} alt="banner" style={bannerStyle}></img>
      <AboutCard>
        <AboutTitle>
          Fiabilité
          <CButton {...getToggleProps({ onClick: () => setIsExpanded((prevExpanded) => !prevExpanded)})}><AiOutlineUp/></CButton>
          
        </AboutTitle>
        <CCollapse>
        <AboutParagraph {...getCollapseProps()}>Les annonces postées sur Kasa garantissent une fiabilité totale.
          Les photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.</AboutParagraph>
          </CCollapse>
      </AboutCard>
      <AboutCard>
        <AboutTitle {...getToggleProps({ onClick: () => setIsExpanded((prevExpanded) => !prevExpanded)})}>
          Respect
          <AiOutlineUp />
          </AboutTitle>
        <AboutParagraph {...getCollapseProps()}>La bienveillance fait partie des valeurs fondatrices de Kasa.
          Tout comportement discriminatoire ou de perturbation du voisinage entrainera
          une exclusion de notre plateforme.</AboutParagraph>
      </AboutCard>
      <AboutCard>
      <AboutTitle>
        Service
        <AiOutlineUp />
        </AboutTitle>
      <AboutParagraph>Nos équipes se tiennent à votre disposition pour vous fournir
        une expérience parfaite. N'hésitez pas à nous contacter si vous avez la
        moindre question.</AboutParagraph>
        </AboutCard>
        <AboutCard>
      <AboutTitle>
        Sécurité
        <AiOutlineUp />
        </AboutTitle>
      <AboutParagraph>La sécurité est la priorité de Kasa. Aussi bien pour nos
        hôtes que pour les voyageurs, chaque logement correspond aux critères de
        sécurité établis par nos services. En laissant une note aussi bien à
        l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
        standards sont bien respectés. Nous organisons également des ateliers
        sur la sécurité domestique pour nos hôtes.</AboutParagraph>
        </AboutCard>
    </AboutContainer>
  )
}

export default About