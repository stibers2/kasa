import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css'


function KasaCarousel({ rentalId, rentalImg, kasaWidth }) {
    const images = [];
    let i=1;
    const size= rentalImg.length;
    for (const [key, value] of Object.entries(rentalImg)) {
        images.push(<div> <img src={value} className="img" ></img> <p className="legend">{i}/{size}</p></div>);
        i++;
    }
    return (
      
    <Carousel autoPlay={true} interval={1000} infiniteLoop={true} autoFocus={false} style={{ width: kasaWidth }}>
        {images}
    </Carousel>
    )

}

export default KasaCarousel
