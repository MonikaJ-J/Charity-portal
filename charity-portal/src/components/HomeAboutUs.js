import react from "react";
import people from "../assets/people.png";
import signature from "../assets/signature.svg";

const HomeAboutUs = () => {

    return (
        <div className="about-container home-container" id="about-us">
            <div className="about-text">
                <h4>O nas</h4>
                <p>Nori grape silver beet broccoli kombu beet greens fava bean potato
                     quandong celery. Bunya nuts black-eyed pea prairie turnip leek
                      lentil turnip greens parsnip.</p>
                <img src={signature} className="about-signature" alt="signature" />
            </div>
            <div className="about-image">
                <img src={people} className="about-photo" alt="people in a circle, smiling" />
            </div>
        </div>
    )
}

export default HomeAboutUs;
