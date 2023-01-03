import KasaCarousel from '../../components/KasaCarousel/index.jsx';
import data from '../../assets/logements.json'


function Test() {
  const productId = 'c67ab8a7';
  const rental = data.find(({id}) => id === productId);
  const rentald = rental.id;
  const rentalImages = rental.pictures;
    return (
      <div>
        <KasaCarousel rentalId= {rentald} rentalImg= {rentalImages} />
      </div>
    )
  }
  
  export default Test