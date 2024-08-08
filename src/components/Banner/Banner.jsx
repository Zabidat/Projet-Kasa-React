function Banner (props)   // Prends comme argument en entrée Props 
//et les valeurs de image, Texte et bannerclasssont récuperées dans Home component pour afficher notre bannière
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