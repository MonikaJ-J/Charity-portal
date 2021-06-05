import react from "react";
import background from "../assets/background.png";

const HomeThreeCol = () => {

    return (
        <div className="three-col-container">


            <div className="col-information home-container">
                <img src={background} className="three-col-bg" alt="background" />
                <div className="col-information-text">
                    <span>10</span>
                    <span>ODDANYCH WORKÓW</span>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipisc Pellentesque
                        vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </div>
                <div className="col-information-text">
                    <span>5</span>
                    <span>WSPARTYCH ORGANIZACJI</span>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipisc Pellentesque
                        vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </div>
                <div className="col-information-text">
                    <span>7</span>
                    <span>ZORGANIZOWANYCH ZBIÓREK</span>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipisc Pellentesque
                        vel enim a elit viverra elementuma.
                        Aliquam erat volutpat.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default HomeThreeCol;
