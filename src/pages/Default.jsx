import Hero from "../components/hero-page/Hero.jsx";
import Products from "../components/products-page/Products.jsx";
import Banner from "../components/banner-page/Banner.jsx";
import About from "../components/about-page/About.jsx";
import Showcase from "../components/showcase-page/Showcase.jsx";
import Contact from "../components/contact-page/Contact.jsx";

function Default() {
    return (
        <>
            <Hero />
            <Products />
            <Banner />
            <About />
            <Showcase />
            <Contact />
        </>
    );
}

export default Default;
