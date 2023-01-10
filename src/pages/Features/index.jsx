import styled from 'styled-components'
import KasaCarousel from '../../components/KasaCarousel/index.jsx';
import data from '../../assets/logements.json'
import {useSearchParams} from "react-router-dom";
import CollapsibleCard from '../../components/CollapsibleCard/index.jsx';
import './index.css';




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
      <div className="featuresContainer">
        <div className="tagContainer">{rentalTag}</div>
        <div className="card">
          <p className="cardTitle">
        {rental.title}
        </p>
        </div>
        <div className="equipContainer">
             <div className="equip2Container">
                <CollapsibleCard  title={tab[2].title} description={tab[2].description} />
                </div>
                    <div className="equip2Container">
                <CollapsibleCard  title={tab[2].title} description={tab[2].description} />
                </div>
        </div>
        <div className="aboutContainer">
                    <div className="about2Container" >
                <CollapsibleCard  title={tab[0].title} description={tab[0].description} />
                </div>
                    <div className="about2Container"  >
                <CollapsibleCard  title={tab[1].title} description={tab[1].description} />
                </div>
        </div>
    <KasaCarousel rentalId= {rentalId} rentalImg= {rentalImages} kasaWidth='700px'/>
      </div>
    )
  }
  
  export default Features