function EmailForm() {
    return(
        <>
            <form className="home-contact-form">
                <label className="home-contact-form-label" for="firstName">Name:</label>
                <input className="home-contact-form-input" type="text" id="firstName" name="firstName" required />
                <br/>
            
                <label className="home-contact-form-label" for="email">Email:</label>
                <input className="home-contact-form-input" type="email" id="email" name="email" required />
                <br/>
                
                <label className="home-contact-form-label" for="message">Message:</label>
                <textarea className="home-contact-form-input home-contact-form-message" id="message" name="message" placeholder="Type your message... " required></textarea>
                <br/>
                
                <input className="home-contact-form-send" type="submit" value="Send" />
            </form>
        </>
    );
}

export default EmailForm