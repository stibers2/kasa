import { useLoaderData } from "react-router-dom";
//import CarouselPn from "./Carousel";
//import CarouselItem from './CarouselItem'
import CollapsibleCard from '../../components/CollapsibleCard/index.jsx';
import '../../assets/css/carouselidx.css'

import { Carousel } from "react-carousel-minimal";

const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
}
const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
}

const CarouselPic = () => {
    const { rental } = useLoaderData();
    const { pictures } = rental
    const rows = [];
    pictures.map((picture, index) => {
        const p = Object.assign({ image: picture, caption: 'image ' + index });
        rows.push(p);
    })
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
        <div className="container">
            {/* <CarouselPn pictures={rows}>
                {rows.map((picture, index) => (
                    <CarouselItem key={'carousel__item__' + index} picture={picture.image}>
                    </CarouselItem>
                ))}
            </CarouselPn> */}
            <div className="tagContainer">tag</div>
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
        <div className="aboutContainerCarousel">
                    <div className="about2ContainerCarousel" >
                <CollapsibleCard  title={tab[0].title} description={tab[0].description} />
                </div>
                    <div className="about2ContainerCarousel"  >
                <CollapsibleCard  title={tab[1].title} description={tab[1].description} />
                </div>
        </div>
            <Carousel
                data={rows}
                time={2000}
                width="100%"
                height="500px"
                radius="10px"
                automatic={true}
                slideNumber={true}
                captionPosition="bottom"
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="144px"
                captionStyle={captionStyle}
                slideNumberStyle={slideNumberStyle}
                style={{
                    textAlign: "center",
                    maxWidth: "1440px",
                    maxHeight: "600px",
                    margin: "40px auto",
                }}
            />
        </div>
    );
}
export default CarouselPic