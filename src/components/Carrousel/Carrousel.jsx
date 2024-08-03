import {useState} from "react";
import LeftArrow from "../../assets/carrousel/flèche-left.png";  
import rightArrow from "../../assets/carrousel/flèche-right.png"; 

function Carrousel (props) {

    const {image, index} = props 

    // Création du Hook d'état dont je définie l'index (variable initiale=current) du premier slide à 0
    const [current, setCurrent] = useState(0); 

    // Définition du longeur du tableau de slides
    const length = props.length; 

    // Function qui change la valeur de notre paramètre current pour l'image précédente
    const nextImage = () => {
        // On repart au première image quand on arrive au dernière.
        setCurrent(current === length -1 ? 0 : current +1); 
    };

    const prevImage = () => {
        // On repart au dernière image quand on est première.
        setCurrent (current === 0 ? -1 : current -1); 
    }
    
    if (!Array.isArray(props) || props.length <= 0) {
        // si l'objet en argument n'est pas un tableau alors la méthode renvoie false. 
        return null; 
    }

    return (

        <section className="container-carrousel">
            {
                length > 1 && (

                    <img 
                        src = {LeftArrow}
                        alt = "Flèche gauche"
                        onClick={prevImage}
                        className="left-Arrow"
                    />
            )}

            {
                length > 1 && (
                        
                    <img 

                        src ={rightArrow}
                        alt = "Flèche droite"
                        onClick={nextImage}
                        className="right-Arrow" 

                    />
            )}

            {props.map((image, index) => (

                <div
                    //Mise en place du slider avec une affichage conditionnelle et transparence =1 si l'image en cours est égale a l'index. 

                    key={index}
                    className= {index === current ? "slider active-animation" : "slider"}
                >
                    {
                        index === current && <img src={image} alt="Appartement à louer"/> 
                    }

                    {
                        index === current && (
                        <span className="slider_number">
                             {current + 1}/{length} 
                        </span> 
                    )}

                </div> 

                    
            ))}

        </section>
    )


}

export default Carrousel 


