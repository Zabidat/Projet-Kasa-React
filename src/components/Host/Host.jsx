function Host(props){
    
    // Les paramètres name, picture et id en props sont recupéres depuis le composant Fiche de logement pour afficher le profile. 
    const {name, picture, id} = props; 

    return (
		<aside className="host-container">
			<span className="host-name">{name}</span>
			<div className="host-picture">
				<img src={picture} alt={id} className="host-picture_img"/> 
			</div>
		</aside>
	)
}

export default Host  