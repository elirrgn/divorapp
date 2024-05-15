import Header from "../Components/Header";
import Hero from "../Components/Hero";
import AffiliateSection from "../Components/AffiliateSection";
import HomeContacts from "../Components/HomeContacts";

function Home() {

    return(
        <>
            <Header />
            <section className="hero">
                <Hero />
            </section>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFF6EF" fillOpacity="1" d="M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,122.7C1120,85,1280,43,1360,21.3L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            <AffiliateSection />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310"><path fill="#FFF6EF" fill-opacity="1" d="M0,128L80,144C160,160,320,192,480,202.7C640,213,800,203,960,186.7C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <HomeContacts />
        </>
    );
}

export default Home