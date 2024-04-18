import "../App.css"
import logo from "../assets/img/app_logo.png"

import googlePlay from "../assets/img/google-play.png"
import appStore from "../assets/img/app-store.png"

function Header() {
    const menuItems = [
        {link: "home", url:"/"},
        {link: "contact", url:"/contact/"},
        {link: "about us", url:"/aboutus/"}
    ];
    const menu = menuItems.map(item => <li key={item.link}><a href={item.url}>{item.link}</a></li>);

    return(
        <>
            <header>
                <div className="container">
                    <a href="/">
                        <div className="icon">
                            <img src={logo} alt="logo_img" className="header-logo" draggable="false"/>
                        </div>
                    </a>
                    <div className="menu">
                        <ul>
                            {menu}
                        </ul>
                    </div>
                    <div className="download-menu">
                        <ul>
                            <li><a href=""><img src={googlePlay} alt="Google-Play logo" draggable="false"/></a></li>
                            <li><a href=""><img src={appStore} alt="App-Store logo" draggable="false"/></a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header