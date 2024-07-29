function Banner ({image, Texte})   // Composant réutilisable grâce aux props
{
    return (
        <div className="banner-container">
            <img className="banner-container_img" alt="Bannière" src={image}/>
            <div className="banner-container_sombre"/>
            <span className="banner-container_text">{Texte}</span>
          
        </div>
    ); 

};
export default Banner 