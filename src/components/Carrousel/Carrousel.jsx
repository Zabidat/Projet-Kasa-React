import {useState, useEffect} from "react";
import LeftArrow from "../../assets/carrousel/flèche-left.png";  
import rightArrow from "../../assets/carrousel/flèche-right.png"; 

function Carrousel (props) {

    // Récupèrer la liste du tableau d'images 
    const {images} = props;

    // Suivre l'état de la position(index est un nombre) de l'image
    const [currentIndex, setCurrentIndex] = useState (0); 

    // Suivre l'état du chemin de l'image (récupère l URl correspondant)
    const [currentImage, setCurrentImage] = useState(images[currentIndex]);

    // Changer L'état de l'image(ou chemin d'image) à chaque fois que le currentIndex change 
    //(currentIndex change, on appelle useEffect)
    useEffect (() => { 
        setCurrentImage (images[currentIndex]);

         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex])

    // Aller à la position de l'image suivante
    const nextImages = () => {

        // Arriver au dernière image,au clic du flèche next on retourne à la première image
        setCurrentIndex(currentIndex === (images.length -1 )? 0 : currentIndex + 1);
    }

    //Aller à la position de l'image précédente
    const prevImages = () => {

        // si on est à la première image, au clic du flèche précédente on retourne à la dernière image, 
        //sinon on affiche image précédente
        setCurrentIndex(currentIndex === 0 ? (images.length - 1) : currentIndex -1); 
    }

    return (
        <div className="container-carrousel">
           <div className="slider  active-animation"> 
                <img src ={currentImage} alt="slide carrousel" className="slider_img"/>
             
                {/* si la taille totale de l'image est >1, 
                on affiche les flèches et numérotations, sinon on affiche rien cad c'est < ou = 1 */}
 
                {images.length > 1 ? <span onClick={prevImages}><img src = {LeftArrow} alt="leftArrow" className="left-Arrow "/></span> : <></>} 
                {images.length > 1 ? <span onClick={nextImages}><img  src= {rightArrow} alt="rightArrow" className="right-Arrow" /></span> : <></>}
                {images.length > 1 ? <span className="slider_number">{`${currentIndex +1}/${images.length}`}</span> :<></>}

           </div>

        </div>
    )


}

export default Carrousel 


