function Cards({cover, title}) 
{
    // Cards de locations recupérent les couvertures et titres en props depuis le composant Home. 
    
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