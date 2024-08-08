import { useState } from "react";
import ImageVectorUp from "../../assets/collapse/Vector-Up.svg";


function Collapselist (props){
    // Les paramètres title et content en props sont recupéres depuis le composant About. 
    const {title, content} = props

    //Declaration du Hook useState() et l'état de notre valeur est par défaut Faux. 
    const [isOpen, setOpen] = useState(false); 

    const toggleState = () => {
        // Cette fonction modifie la valeur du contenu des collapses au clic. 
        setOpen(!isOpen); 
    }

    return (
        // Affichage du collapse replié par defaut, 
        //l'utlisateur ouvrira au clic et le fermera au clic tout en faisant disparaitre le texte ainsi que le style.  
        <div className="collapse">
            <div className="collapse_deroulant">
                <h2>{title}</h2> 
                <span onClick={toggleState} className="collapse_toggle">

                    {/* isOpen est une variable qui suit l'état de notre collapse
                      et event onClick change isOpen état lorsque on clique sur l'élément pour l'ouvir ou le fermé 
                    */} 

                    {isOpen ? (<img src={ImageVectorUp} alt="Vector-Up" className="rotated-up"/>) : (<img src={ImageVectorUp} alt="Vector-Down" className="rotated-down"/>)}
                </span>
                
            </div>

                 {isOpen && 
                         <div className="collapse_equipement"> 
                            {/* Si le Collapse est a True alors la liste des equipements sera affichée */}
                            <ul className="collapse_equipement"> {content.map((text)=>(
                                
                                <li>{text}</li>
                            ))} 
                        </ul>
                    </div>
                 }
                
            </div>

    )

}
export default Collapselist