import Hero from "../components/hero-page/Hero.jsx";
import Products from "../components/products-page/Products.jsx";
import Banner from "../components/banner-page/Banner.jsx";
import Customers from "../components/customers-page/Customers.jsx";

function DefaultPage() {
    return (
        <>
            <Hero />
            <Products />
            <Banner />
            <Customers />
        </>
    );
}

export default DefaultPage;
