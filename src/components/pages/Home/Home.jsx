import Header from "../../Header/Header"; 
import Banner from "../../Banner/Banner"; 
import imgHomeBanner from "../../../assets/banner/HomeBanner.png"; 
import logements from "../../../datas/logement.json"; 
import {Link} from "react-router-dom"; 
import Cards from "../../Cards/Cards"; 
import Footer from "../../Footer/Footer"; 

function Home () {
  return (
       
      <div className="home">
            <Header />
            <main> 

                <Banner Texte="Chez vous, partout et ailleurs" image={imgHomeBanner} />  
               
                <div className="Card-Container">
                    {logements.map((logement) => (
                                // la fonction map va mapper chaque élément du tableau et nous retourner un objet contenant le résultat de la fonction map

                        <article key={logement.id}> 
                                {/* la prop Key va identifier les éléments par leur id et nous retourner une chaine de caractère */}

                            <Link className="link-cardLogement" to ={`/logement/${logement.id}`}> 
                                <Cards cover={logement.cover} title={logement.title}/>               
                            </Link>
                            
                        </article>

                    ))}   

                </div>

            </main>

            <Footer /> 

        </div>

    );

}

export default Home  