import '../../assets/css/rental.css';
import star_full from '../../assets/star_rate-24px 5.svg';
import star_empty from '../../assets/star_rate-24px 2.svg';
import CollapsibleCard from '../../components/CollapsibleCard/index.jsx';
import { Link } from 'react-router-dom'
import Carousel from "../../components/Carousel/index.jsx";
import { useLoaderData } from "react-router-dom";


const h1Style = {
    color: '#FF6060',
};
const h2Style = {
    color: '#FF6060',
};

function Rental(props) {
    const { rental } = useLoaderData();
    const equipments = [];
    for (const [key, value] of Object.entries(rental.equipments)) {
        equipments.push(<li key={'equip-' + key}>{value}</li>);
    }
    const stars= [];
    for (let i=0;i<rental.rating;i++) {
        stars.push(<img src={star_full} alt="star full" className='star'></img>)
    }
    for (let i=rental.rating;i<5;i++){
        stars.push(<img src={star_empty} alt="star empty" className='star'></img>)
    }
    const tags = [];
    for (const [key, value] of Object.entries(rental.tags)) {
        tags.push(<Link className="linkTag" to={`/features?id=${rental.id}&tag=${value}`}>
            <p key={'equip-' + key} className='tag'>{value}</p>
            </Link>);
    }
    const tab = [
        { title: 'Description'
        , description: rental.description 
      },
      { title: 'Equipements'
        , description: equipments
      }]
     
    return (
        <div>
            <div key={rental.id}>
            <Carousel pictures={rental.pictures}></Carousel>
                <div className="headerContainerRental">
                    <div className="titleContainer">
                        <h1 style={h1Style}>{rental.title}</h1>
                        <h2 style={h2Style}>{rental.location}</h2>
                        <div className="tagContainer">{tags}</div>
                    </div>
                    <div className="hostAndRatingContainer">
                        <div className="hostContainer">
                            <h2 className="hostName">{rental.host.name}</h2>
                            <div className="hostPicContainer">
                                <img src={rental.host.picture} alt={rental.host.name} className='hostPic'></img>
                            </div>
                        </div>
                        <div className="ratingContainer">
                            {stars}
                        </div>
                    </div>
                </div>
                <div className="aboutContainerRental">
                    <div className="about2ContainerRental" >
                        <CollapsibleCard  title={tab[0].title} description={tab[0].description} />
                        </div>
                    <div className="about3ContainerRental" >
                        <CollapsibleCard  title={tab[1].title} description={tab[1].description} />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Rental