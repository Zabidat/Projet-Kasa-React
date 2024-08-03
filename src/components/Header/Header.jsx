import { Link } from "react-router-dom";
import logo from "../../assets/logo/LOGO Header.svg";

function Header(){
    return (
        <header className="header-property">
           
            <figure className="header-property_figure">
                <img src={logo} alt="Logo de l'agence kasa" className="header-property_logo" />
            </figure>
           
           <nav className="nav-header">
                <Link to="/" className="nav-header_link-home">Accueil</Link>
                <Link to ="/about" className="nav-header_link-about">A Propos</Link>  
           </nav> 
           
        </header>
    )
}
export default Header 