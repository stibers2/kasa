import data from '../../assets/logements.json'
import styled from 'styled-components'
import {useSearchParams} from "react-router-dom";
import './rental.css';
import star_full from '../../assets/star_rate-24px 5.svg';
import star_empty from '../../assets/star_rate-24px 2.svg';
import CollapsibleCard from '../../components/CollapsibleCard/index.jsx';
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom'

const PageContainer = styled.div`
display : flex;
color:#FF6060;
`


const h1Style = {
    color: '#FF6060',
};
const h2Style = {
    color: '#FF6060',
};

function Rental(props) {
    /*  get product id with useSearchParams Hook */
    const [searchParams] = useSearchParams();
    const productId = searchParams.get('id');
    const rental = data.find(({id}) => id === productId);
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
        tags.push(<Link className="linkTag" to={`/features?id=${productId}&tag=${value}`}>
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
      let productFound= data.find(({id}) => id === productId ) ; /*productId c67ab8a72*/
    return (
        <PageContainer>
            {! productFound && (
          <Navigate to="/Error" replace={true} />
            )}
            <div key={rental.id}>
                <div className="imgContainer">
                    <img src={rental.cover} alt={rental.title}></img>
                </div>
                <div className="headerContainer">
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
                <div className="aboutContainer">
                    <div className="about2Container">
                        <CollapsibleCard  title={tab[0].title} description={tab[0].description} />
                        </div>
                    <div className="about2Container">
                        <CollapsibleCard  title={tab[1].title} description={tab[1].description} />
                        </div>
                </div>
            </div>
        </PageContainer>
    )
}

export default Rental