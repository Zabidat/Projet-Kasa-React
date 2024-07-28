import logofooter from "../../assets/logo/LOGO Footer.svg"; 

function Footer()
{
    return (
        <footer className="footer-property">
        <img src={logofooter} alt="" className="footer__logo" />
        <p className="footer-property_text-copyright">
          © 2020 Kasa. All rights reserved
        </p>
      </footer>
    );
}
export default Footer 