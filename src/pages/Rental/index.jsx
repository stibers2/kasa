import data from '../../assets/logements.json'
import styled from 'styled-components'
import {AiFillStar, AiOutlineStar, AiOutlineUp} from "react-icons/ai";
import {useSearchParams} from "react-router-dom";

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
background-color:#FF6060;
color:white;
`
const AboutContainer = styled.div`
display:flex;
flex-direction: row;
`
const About2Container = styled.div`
display:flex;
flex-direction: column;
margin-left: 10px;
width:50%;
`
const AboutTitleContainer = styled.div`
background-color:#FF6060;
  color:white;
  display : flex;
  flex-direction:row;
  justify-content: space-between;
  border-radius:5px;
  padding-left: 5px;
`


const AboutTitle = styled.div`
  background-color:#FF6060;
  color:white;
  display : flex;
  justify-content: space-between;
  border-radius:5px;
  padding-left: 5px;
`

const AboutParagraph = styled.div`
  background-color:#F6F6F6;
  color:#FF6060;
  padding: 10px 5px 10px 5px;
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
flex-direction: row;
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
    return (
        <PageContainer>
            <p>Rental</p><br></br>
            <div key={rental.id}>
                <ImgContainer>
                    <img src={rental.cover} alt={rental.title}></img>
                </ImgContainer>
                <HeaderContainer>
                    <TitleContainer>
                        <h1 style={h1Style}>{rental.title}</h1>
                        <h2 style={h2Style}>{rental.location}</h2>
                        <TagContainer>tag</TagContainer>
                    </TitleContainer>
                    <HostAndRatingContainer>
                        <HostContainer>
                            <h2>{rental.host.name}</h2>
                            <HostPicContainer>
                                <img src={rental.host.picture} alt={rental.host.name}></img>
                            </HostPicContainer>
                        </HostContainer>
                        <RatingContainer>
                            <h2>{rental.rating}</h2>
                            <AiFillStar/>
                            <AiOutlineStar/>
                        </RatingContainer>
                    </HostAndRatingContainer>
                </HeaderContainer>
                <AboutContainer>
                    <About2Container>
                        <AboutTitleContainer>
                            <AboutTitle>Description</AboutTitle>
                            <AiOutlineUp/>
                        </AboutTitleContainer>
                        <AboutParagraph>{rental.description}</AboutParagraph>
                    </About2Container>
                    <About2Container>
                        <AboutTitleContainer>
                            <AboutTitle>Equipements</AboutTitle>
                            <AiOutlineUp/>
                        </AboutTitleContainer>
                        <AboutParagraph>
                            <ul>{equipments}</ul>
                        </AboutParagraph>
                    </About2Container>
                </AboutContainer>
            </div>
        </PageContainer>
    )
}

export default Rental