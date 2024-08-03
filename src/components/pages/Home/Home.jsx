import Banner from "../../Banner/Banner"; 
import imgHomeBanner from "../../../assets/banner/HomeBanner.png"; 
import logements from "../../../datas/logement.json"; 
import {Link} from "react-router-dom"; 
import Cards from "../../Cards/Cards"; 


function Home () {
  return (
       
      <div className="home">

               <div className="container-home">
                
                    <Banner Texte="Chez vous, partout et ailleurs" image={imgHomeBanner} bannerclass="banner-container_imgHome" />  
               
                    <div className="Card-Container">
                    { /* Géneration de la listes de Cards de logements: map. va parcourir le tableau et nous retourner une liste de cards de logements */ } 
                        {logements.map((logement) => (
                               
                            <article key={logement.id}>   
                            
                                {/* la prop Key va identifier les éléments par leur id et nous retourner une chaine de caractère */}

                                <Link className="link-cardLogement" to ={`/logement/${logement.id}`}> 
                                    <Cards cover={logement.cover} title={logement.title}/>               
                                </Link>
                           
                            </article>

                        ))}   

                    </div>

                </div>

        </div>

    );

}

export default Home  