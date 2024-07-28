import { Link } from "react-router-dom";


function Error404()
{
    return (
        <div className="error-property">
            <p className="error-property-number">404</p>
            <p className="error-property-text">Oups! La page que vous demandez n'existe pas.</p>

            <Link to="/" className="error-property-link"> 
            Retourner sur la page d’accueil 
            </Link>
        </div>
       
    )
}
export default Error404  