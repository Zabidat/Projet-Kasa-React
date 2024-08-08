import logements from "../../../datas/logement.json"; 
import Carrousel from "../../Carrousel/Carrousel";
import Tags from "../../Tags/Tags"; 
import Host from "../../Host/Host"; 
import Rate from "../../Rate/Rate";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Collapse from "../../Collapse/Collapse";
import Collapselist from "../../Collapse/Collapselist";
import { Navigate } from "react-router-dom";

// Au click d'un appartement, on fait appelle à ce composant qui affiche le carrousel ainsi que les informations nécessaires du logement.  
function Fiche(){

   //Récupèrer l'id de logement correspondant (id de l'element envoyé par Home page)
    const {id} = useParams(); 

    // Récupère les informations totales du logement actuel, lui même, correspondant ou id envoyé par Home Page,
    //ON a initialisé la valeur à Null car on ne sait pas ce qu il contient(Pour identifier si le Résultat est disponible ou pas dans la base Data).
    const [logement, setLogement] = useState(null);

    //Suivre l'état de disponibilite de la reponse de UseEffect (Savoir si le Résultat est disponible)
    const [isstate, SetState] = useState(false);

    // Mise à jour des informations de logement via useEffect
    // eslint-disable-next-line 
    useEffect (() =>
    {
        //Function find (avec x correspond à l'élément du tableau,find itère sur chaque élément de l'objet et dès qu'il trouve l'id correspondant, il s'arrête)
        //Et compare id cliqué à chaque id du logement Data,et nous retourne l'élément du tableau qui un objet 
        //Contenant l'élément qui corresponde à l'id récupérer de useParams 
        // SetLogement prends la reponse du find et fait un mise à jour de la valeur du logement

        setLogement(logements.find((x)=> id===x.id));

        //Si la response est disponible (Donc sa valeur est différent de null)
        if(logement !== null )
        {
            SetState(true)
        }

    }) //À chaque fois id change, useEffect sera éxecuter

    return (

       
        //On vérifie si la réponse du find est disponible(logement est # de null) et si le logement est trouvé (!=undefined)
      isstate && (  logement !==undefined ? <div className="container-fiche">


           {
            //logement correspond au reponse de find l'élément du tableau qui est un objet, et il ne peut y avoir qu'un seul élément car id est unique
            //On test si le pictures est un tableau et on affiche le CARROUSEL qui prend comme argument en entrée un tableau.
            Array.isArray (logement.pictures) && <Carrousel  images= {logement.pictures}/>
            }

            <div className="container-children">

                <div className="container-TagsTitle"> 
                
                    {/* Title and Location */}
                    <div className="title-tags-container ">
              
                        {/*On test si la réponse ou données du find(logement correspond au reponse de find) est disponible 
                        et on affiche title de logement correspondant, Location et Tags*/ } 
                        <h1>{logement.title}</h1> 

                        <h3>{logement.location}</h3>
               
                    </div>

                    {/* Tags */}
                    <div className="tags-contParent">
                        {logement.tags.map((tag,index)=> (
                         <Tags tag ={tag} key= {index} />
                        ))}
                    </div>   

                </div>

                <div className="container-host-rate">
                
                    {/* Host */}  
                    <div className="">
                        {/*On test si le réponse du find(logement correspond au résultat du filtre) est disponible 
                        et on affiche le Profil de logement correspondant et Rating */ } 
                        <Host picture = {logement.host.picture} name = {logement.host.name} id = {logement.host.name} />
                    </div>
                
                    {/* Rating */}
                    <div className="mg-20">
                        <Rate  rate = {logement.rating} />
                    </div> 

                </div>

            </div>


            <div className="container-collapse">

                {/* Description */}
                <div className="w-30">
                    <Collapse title ="Description" content ={logement.description} />
                </div>
                
                {/* Equipements */}
                <div className="w-30">
                    {/* On teste si le contenu des équipements est un tableau,on affiche Collapselist
                    dont son objectif est d'afficher un contenu dont le type est un tableau */}
                    { Array.isArray (logement.equipments)&& <Collapselist title ="Equipements" content ={logement.equipments} />}
                </div>
               
            </div>

        </div>:  <Navigate to="*"/>)   //En cas d'id incorrect, on sera rédiriger vers la page d'erreur (Navigate=fait partie de la biblio Router React)
    )

}
export default Fiche   