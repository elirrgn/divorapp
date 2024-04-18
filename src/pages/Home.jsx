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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f2f2f2" fillOpacity="1" d="M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,122.7C1120,85,1280,43,1360,21.3L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            <AffiliateSection />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fb5f0e" fill-opacity="1" d="M0,32L120,69.3C240,107,480,181,720,197.3C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            <HomeContacts />
        </>
    );
}

export default Home