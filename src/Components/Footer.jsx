function Footer() {

    return(
        <>
            <footer className="footer">
                <div className="container footer-container">
                    <div className="footer-section">
                        <h1 className="footer-section-title">
                            Sitemap
                        </h1>
                        <a href="/" className="footer-section-info">Home</a>
                        <a href="/contact/" className="footer-section-info">Contact Us</a>
                    </div>
                    <div className="footer-section">
                        <h1 className="footer-section-title">
                            Download the app
                        </h1>
                        <a href="" className="footer-section-info">App Store</a>
                        <a href="" className="footer-section-info">Google Play</a>
                    </div>
                    <div className="footer-section">
                        <h1 className="footer-section-title">
                            Contacts
                        </h1>
                        <a href="tel:+012 343 5436" className="footer-section-info">
                            +012 343 5436
                        </a>
                        <a href="mailto:divorapp@gmail.com" className="footer-section-info">
                            divorapp@gmail.com
                        </a>
                        <a href="https://maps.app.goo.gl/1VLx2SVoipUdUuRt5" className="footer-section-info">
                            London Eye 12, U
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer