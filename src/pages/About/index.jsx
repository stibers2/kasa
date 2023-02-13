import about_banner from '../../assets/about_banner.png'
import '../../assets/css/about.css';
import CollapsibleCard from '../../components/CollapsibleCard/index.jsx';




function About() {
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
    <div className="aboutContainerAbout">
      <img src={about_banner} alt="banner" className="banner_about"></img>
      <div className="aboutCardAbout">
        <CollapsibleCard  title={tab[0].title} description={tab[0].description} />
        </div>
      <div className="aboutCardAbout">
        <CollapsibleCard  title={tab[1].title} description={tab[1].description} />
        </div>
      <div className="aboutCardAbout">
        <CollapsibleCard  title={tab[2].title} description={tab[2].description} />
        </div>
      <div className="aboutCardAbout">
        <CollapsibleCard  title={tab[3].title} description={tab[3].description} />
        </div>
    </div>
  )
}

export default About