import { Link } from "react-router-dom";

function Error404()
{
    return (
       <div className="nonPage">
                <div className="error-container">
                    <p className="error-number">404</p>
                    <p className="error-text">Oups! La page que vous demandez n'existe pas.</p>

                    <Link to="/" className="error-link"> 
                        Retourner sur la page d’accueil 
                    </Link>
                </div>
       </div>
       
    )
}
export default Error404  