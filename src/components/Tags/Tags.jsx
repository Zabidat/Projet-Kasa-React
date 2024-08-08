function Tags (props){

	//On Récupère les différents tags de chaque éléments de notre tableau logement(data). 
	//Ce component prend comme argument en entrée un tableau au format string. 

	const {tag} = props; 

    return (
				
		
			<div className="tag-container">
				<span className="tag-button">{tag}</span>
			</div>
		
	);
}

export default Tags 