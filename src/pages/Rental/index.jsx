//import { useLoaderData } from "react-router-dom";
import '../../assets/css/rental.css';
import star_full from '../../assets/star_rate-24px 5.svg';
import star_empty from '../../assets/star_rate-24px 2.svg';
import CollapsibleCard from '../../components/CollapsibleCard/index.jsx';
import { Link } from 'react-router-dom'
//import data from '../../assets/logements.json'
import Carousel from "../../components/Carousel/index.jsx";
import { useLoaderData } from "react-router-dom";
//import {useSearchParams} from "react-router-dom";
//import styled from 'styled-components'

const h1Style = {
    color: '#FF6060',
};
const h2Style = {
    color: '#FF6060',
};/*
const PageContainer = styled.div`
display : flex;
color:#FF6060;
`*/

function Rental(props) {
    /*  get product id with useSearchParams Hook */
    //const [searchParams] = useSearchParams();
    //const productId = searchParams.get('id');
    //const productId = window.location.pathname.substr(8);
    //const rental = data.find(({id}) => id === productId);
    const { rental } = useLoaderData();
    const equipments = [];
    for (const [key, value] of Object.entries(rental.equipments)) {
        equipments.push(<li key={'equip-' + key}>{value}</li>);
    }
    const stars= [];
    for (let i=0;i<rental.rating;i++) {
        stars.push(<img src={star_full} alt="star full"></img>)
    }
    for (let i=rental.rating;i<5;i++){
        stars.push(<img src={star_empty} alt="star empty"></img>)
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
                            <h2>{rental.host.name}</h2>
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