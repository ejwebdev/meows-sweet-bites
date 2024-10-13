import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import Header from "./components/header-page/Header.jsx";
import Default from "./pages/Default.jsx";
import Products from "./components/products-page/Products.jsx";
import Pricing from "./components/pricing-page/Pricing.jsx";
import About from "./pages/About.jsx";
import Contact from "./components/contact-page/Contact.jsx";
import Banner2 from "./components/banner2-page/Banner2.jsx";
import Footer from "./components/footer-page/Footer.jsx";

function App() {
    const location = useLocation();
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: location.pathname });
    }, [location]);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Default />} />
                <Route path="/products" element={<Products />} />
                <Route path="/price-lists" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Banner2 />
            <Footer />
        </>
    );
}

export default App;
