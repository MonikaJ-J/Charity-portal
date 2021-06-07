import react from "react";
import ornament from "../assets/ornament.png";
import iconArrows from "../assets/iconArrows.png";
import iconBag from "../assets/iconBag.png";
import iconSearch from "../assets/iconSearch.png";
import iconShirt from "../assets/iconShirt.png";
import { Link } from "react-router-dom";

const HomeSteps = () => {

    return (
        <div className="steps-container  home-container" id="four-steps">
            <h3 className="steps-title">Wystarczą 4 proste kroki</h3>
            <img src={ornament} className="ornament-steps" alt="an ornament" />
            <div className="four-steps">
                <div className="step">
                    <div className="icon-steps">
                        <img src={iconShirt} className="icon-steps-shirt" alt="a polo shirt logo" />    
                    </div>
                    <span>Wybierz rzeczy</span>
                    <p>ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="step">
                    <div className="icon-steps">
                        <img src={iconBag} className="icon-steps-bag" alt="a shopping bag logo" />
                    </div>
                    <span>Spakuj je</span>
                    <p>skorzystaj z worków na śmieci</p>
                </div>
                <div className="step">
                    <div className="icon-steps">
                        <img src={iconSearch} className="icon-steps-search" alt="a magnifier logo" />
                    </div>
                    <span className="search-step">Zdecyduj komu<br /> chcesz pomóc</span>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="step">
                    <div className="icon-steps">
                        <img src={iconArrows} className="icon-steps-arrows" alt="arrows in circle, logo" />
                    </div>
                    <span>Zamów kuriera</span>
                    <p>kurier przyjedzie w dogodnym terminie</p>
                </div>
            </div>
            <div className="steps-btn-container">
                    <button className="homeheader-btn steps-btn">
                        <Link to="/oddaj-rzeczy">ODDAJ <br />RZECZY</Link>
                    </button>
                </div>
        </div>
    )
}

export default HomeSteps;