function Cards(props) 
{
    // Les paramètres cover,title qui récupèrent l'image de couverture et titres en props depuis le composant Home. 
    
    const {cover,title} = props
   
    return (

        <div className="card">
            <img className="card_img" src={cover} alt={title}/>  
            <div className="card-overlay"> 
                <h2 className="card_title">{title}</h2>
            </div>
        </div>  
    ); 

}

export default Cards 