import data from '../../assets/logements.json'
import styled from 'styled-components'
import { AiOutlineUp } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

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
  color:'#FF6060',
};
const h2Style = {
  color:'#FF6060',
};


const urlText = window.location.href
var url = new URL(urlText);
const productId = url.searchParams.get("id");
console.log(productId)
/*recuperer props this.props.match.params.id*/

function Rental({ props }) {
  const elt = data.filter(({ id }) => id === productId);
  return (
    <PageContainer>
      <p>Rental</p><br></br>
      {
        elt.map(content => (
          <div key={content.id}>
            <ImgContainer>
              <img src={content.cover} alt={content.title}></img>
            </ImgContainer>
            <HeaderContainer>
          <TitleContainer>
          <h1 style={h1Style}>{content.title}</h1>
          <h2 style={h2Style}>{content.location}</h2>
          <TagContainer>tag</TagContainer>
          </TitleContainer>
          <HostAndRatingContainer>
          <HostContainer>
          <h2>{content.host.name}</h2>
          <HostPicContainer>
          <img src={content.host.picture} alt={content.host.name}></img>
          </HostPicContainer>
          </HostContainer>
          <RatingContainer>
          <h2>{content.rating}</h2>
          <AiFillStar />
          <AiOutlineStar />
          </RatingContainer>
          </HostAndRatingContainer>
          </HeaderContainer>
          <AboutContainer>
          <About2Container>
            <AboutTitleContainer>
          <AboutTitle>Description</AboutTitle>
          <AiOutlineUp />
          </AboutTitleContainer>
          <AboutParagraph>{content.description}</AboutParagraph>
          </About2Container>
          <About2Container>
          <AboutTitleContainer>
          <AboutTitle>Equipements</AboutTitle>
          <AiOutlineUp />
          </AboutTitleContainer>
          <AboutParagraph>{content.equipments}
          </AboutParagraph>
          </About2Container>
          </AboutContainer>
          </div>
        ))
      }

    </PageContainer>
  )
}

export default Rental