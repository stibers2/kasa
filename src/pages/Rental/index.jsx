import data from '../../assets/logements.json'
import styled from 'styled-components'
import {useSearchParams} from "react-router-dom";
import './rental.css';
import star_full from '../../assets/star_rate-24px 5.svg';
import star_empty from '../../assets/star_rate-24px 2.svg';
import CollapsibleCard from '../../components/CollapsibleCard/index.jsx';
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom'


const size = {
    mobile: '768px'
}
export const device = {
    mobile: `(max-width: ${size.mobile})`
};

const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
@media ${device.mobile} { 
  display : flex;
flex-direction: column;
}
`

const TitleContainer = styled.div`
align-items: center;
width:80%;
`
const HostContainer = styled.div`
color::#FF6060;
display: flex;
flex-direction: row;
`

const TagContainer = styled.div`
display : flex;
flex-direction:row;
text-decoration: none;
`
const AboutContainer = styled.div`
display:flex;
flex-direction: row;
@media ${device.mobile} { 
    display : flex;
    flex-direction:column;
}
`
const About2Container = styled.div`
display:flex;
flex-direction: column;
margin-left: 10px;
width:50%;
list-style-type: none;
`

const ImgContainer = styled.div`
display : flex;
`
const PageContainer = styled.div`
display : flex;
color:#FF6060;
`

const HostAndRatingContainer = styled.div`
display : flex;
flex-direction: column;
@media ${device.mobile} { 
  display : flex;
flex-direction: row-reverse;
justify-content: space-between;
}
`
const HostPicContainer = styled.div`
display : flex;
border-radius: 50%;
`
const RatingContainer = styled.div`
display : flex;
flex-direction:row;
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
                <ImgContainer>
                    <img src={rental.cover} alt={rental.title}></img>
                </ImgContainer>
                <HeaderContainer>
                    <TitleContainer>
                        <h1 style={h1Style}>{rental.title}</h1>
                        <h2 style={h2Style}>{rental.location}</h2>
                        <TagContainer>{tags}</TagContainer>
                    </TitleContainer>
                    <HostAndRatingContainer>
                        <HostContainer>
                            <h2>{rental.host.name}</h2>
                            <HostPicContainer>
                                <img src={rental.host.picture} alt={rental.host.name} className='hostPic'></img>
                            </HostPicContainer>
                        </HostContainer>
                        <RatingContainer>
                            {stars}
                        </RatingContainer>
                    </HostAndRatingContainer>
                </HeaderContainer>
                <AboutContainer>
                    <About2Container ><CollapsibleCard  title={tab[0].title} description={tab[0].description} /></About2Container>
                    <About2Container ><CollapsibleCard  title={tab[1].title} description={tab[1].description} /></About2Container>
                </AboutContainer>
            </div>
        </PageContainer>
    )
}

export default Rental