import Hero from "../components/hero-page/Hero.jsx";
import Products from "../components/products-page/Products.jsx";
import Banner from "../components/banner-page/Banner.jsx";
import Showcase from "../components/showcase-page/Showcase.jsx";

function DefaultPage() {
    return (
        <>
            <Hero />
            <Products />
            <Banner />
            <Showcase />
        </>
    );
}

export default DefaultPage;
