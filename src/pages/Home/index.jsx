import accueil_banner from '../../assets/accueil_banner.png'
import { useLoaderData } from "react-router-dom";
import { Link } from 'react-router-dom'
import '../../assets/css/home.css'



function Home() {
  const { data } = useLoaderData();
  return (
    <>
      <div className="homeContainer">
        <img src={accueil_banner} alt="banner" className="banner_home"></img>
        <div className="cardsContainer">
          {
            data.map((content, index) =>
              <div key={"card-" + index} className="card">
                <Link to={`/rental/${content.id}`}>
                  <img src={content.cover} alt="rental" className="imgCardStyle" />
                  <div className="cardTitle">
                    {content.title}
                  </div>
                </Link>
              </div>
            )
          }
        </div>
      </div>
    
    </>  
  )      
}

export default Home