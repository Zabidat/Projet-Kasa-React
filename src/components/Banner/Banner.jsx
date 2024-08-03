function Banner (props)   // Composant réutilisable grâce aux props
{
    const {image, Texte,bannerclass} = props
    return (
        <div className="banner-container">
            <img className={bannerclass} alt="Bannière" src={image}/>
            <div className="banner-container_sombre"/>
            <span className="banner-container_text">{Texte}</span>
          
        </div>
    ); 

};
export default Banner 