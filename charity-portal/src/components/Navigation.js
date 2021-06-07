import react from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Navigation = () => {

    return (
        <nav className="navigation">
            <ul className="nav-top">
                <li className="nav-link nav-top-link"><Link to="/logowanie">Zaloguj</Link></li>
                <li className="nav-link nav-top-link"><Link to="/rejestracja">Załóż konto</Link></li>
            </ul>
            <ul className="nav-bottom">
                <li className="nav-link nav-bottom-link"><Link to="/">Start</Link></li>
                <li className="nav-link nav-bottom-link">
                    <LinkScroll to="four-steps" smooth={true} duration={850}>O co chodzi?</LinkScroll></li>
                <li className="nav-link nav-bottom-link">
                     <LinkScroll to="about-us" smooth={true} duration={850}>O nas</LinkScroll></li>
                <li className="nav-link nav-bottom-link">Fundacja i organizacje</li>
                <li className="nav-link nav-bottom-link">Kontakt</li>
            </ul>
        </nav>
    )
}

export default Navigation;

