import Hero from "../../components/Hero/Hero.jsx";
import About from "../../components/About/About.jsx";
import Services from "../../components/Services/Services.jsx"
import Portfolio from "../../components/Portfolio/Portfolio.jsx";
import Process from "../../components/Process/Process.jsx";
import Studio from "../../components/Studio/Studio.jsx";
import Contact from "../../components/Contact/Contact.jsx";
import "./HomePage.css";

function HomePage() {
    return (
        <>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Studio />
        <Contact />
        </>
    );
}

export default HomePage;