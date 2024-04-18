
function HomeContacts() {
    const srcMap = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d635430.435671925!2d-0.322626!3d51.528806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e0!3m2!1sit!2sus!4v1713453340958!5m2!1sit!2sus";
    
    return(
        <>
        <div className="accent-container">
            <div className="container home-contacts-container">
                <h1 className="home-contacts-title">
                    contact us
                </h1>
                <iframe src={srcMap} width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        </>
    );
}

export default HomeContacts