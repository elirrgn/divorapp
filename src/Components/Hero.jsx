import "../App.css"
import phone from "../assets/img/phone.png"
import googlePlay from "../assets/img/google-play.png"
import appStore from "../assets/img/app-store.png"
import tyimg from "../assets/img/thank_you.png"
import onBoardingImg from "../assets/img/on_boarding_2.png"
import fav from "../assets/img/favorites_btn.png"


function Hero(){

    return(
        <div className="container hero-container">
            <div className="hero-text">
                <h1>
                    the best <br />delivery app
                </h1>
                <p className="hero-descr">
                    From cravings to doorstep in a snap: Your culinary journey startshere!
                </p>
                <p className="hero-download">download now</p>
                <div className="hero-download-links">
                    <a href="" className="hero-download-link">
                        <img src={appStore} alt="app-store logo"className="hero-download-img" draggable="false"/>
                        <p>app store</p>
                    </a>
                    <a href="" className="hero-download-link">
                        <img src={googlePlay} alt="google-play logo"className="hero-download-img" draggable="false"/>
                        <p>google play</p>
                    </a>
                </div>
            </div>
            <div className="hero-phone">
                <div className="phone">
                    <div className="phone-div-img">
                        <img src={phone} alt="" className="phone-img animation--bounce" draggable="false"/>
                        <img src={fav} alt="" className="hero-abs hero-abs-fav animation--slideInRightRotate" draggable="false"/>
                        <img src={tyimg} alt="" className="hero-abs hero-abs-ty animation--slideInRightRotate" draggable="false"/>
                        <img src={onBoardingImg} alt="" className="hero-abs hero-abs-onboarding animation--slideInLeftRotate" draggable="false"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero