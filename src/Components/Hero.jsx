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
                    From cravings to doorstep in a snap: Your culinary journey starts here!
                </p>
                <div className="hero-download-links">
                    <a href="" className="hero-download-link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="hero-download-img"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM127 384.5c-5.5 9.6-17.8 12.8-27.3 7.3-9.6-5.5-12.8-17.8-7.3-27.3l14.3-24.7c16.1-4.9 29.3-1.1 39.6 11.4L127 384.5zm138.9-53.9H84c-11 0-20-9-20-20s9-20 20-20h51l65.4-113.2-20.5-35.4c-5.5-9.6-2.2-21.8 7.3-27.3 9.6-5.5 21.8-2.2 27.3 7.3l8.9 15.4 8.9-15.4c5.5-9.6 17.8-12.8 27.3-7.3 9.6 5.5 12.8 17.8 7.3 27.3l-85.8 148.6h62.1c20.2 0 31.5 23.7 22.7 40zm98.1 0h-29l19.6 33.9c5.5 9.6 2.2 21.8-7.3 27.3-9.6 5.5-21.8 2.2-27.3-7.3-32.9-56.9-57.5-99.7-74-128.1-16.7-29-4.8-58 7.1-67.8 13.1 22.7 32.7 56.7 58.9 102h52c11 0 20 9 20 20 0 11.1-9 20-20 20z"/></svg>
                        <p>app store</p>
                    </a>
                    <a href="" className="hero-download-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="hero-download-img"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/></svg>
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