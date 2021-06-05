import react from "react";
import box from "../assets/box.png";
import ornament from "../assets/ornament.png";
import { Link } from "react-router-dom";
import Navigation from "./Navigation"


const HomeHeader = () => {

    return (
    <>
        <div className="homeheader-container home-container">
            <div className="box-image-container">
                <img src={box} className="box-image" alt="box full of unnecessary things " />
            </div>
            <div className="title-nav-container">
                <Navigation />
                <div className="title-container">
                    <p className="homeheader-title">
                    Zacznij pomagać!<br />
                    Oddaj niepotrzebne rzeczy w zaufane ręce
                    </p>
                    <img src={ornament} className="ornament" alt="an ornament" />
                    <div className="homeheader-btns-box">
                        <button className="homeheader-btn">
                            <Link to="/oddaj-rzeczy">ODDAJ <br />RZECZY</Link>
                        </button>
                        <button className="homeheader-btn">ZORGANIZUJ ZBIÓRKĘ</button>
                    </div>
                </div>
            </div>
        </div>


    
    </>
    )
}

export default HomeHeader;