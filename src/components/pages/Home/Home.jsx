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

                    { /* Géneration de la liste de Cards de logements: map. va parcourir chaque element du tableau 
                    et nous retourner une liste de cards de logements */ } 
                        {logements.map((logement) => (

                            /* la prop Key identifie chaque élément du tableau par son id, 
                            cad pour dire que chaque element est different de l'autre */ 
                            <article key={logement.id}>   
                            
                                {/* Grace a 'to'on definit une route specifique pour acceder a fiche de logement 
                                et l'id nous affichera les informations de l'element correspondant*/} 
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