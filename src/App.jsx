import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import Header from "./components/header-section/Header.jsx";
import Main from "./pages/Main.jsx";
import Products from "./components/products-section/Products.jsx";
import Pricing from "./components/pricing-section/Pricing.jsx";
import About from "./pages/About.jsx";
import Contact from "./components/contact-section/Contact.jsx";
import Banner2 from "./components/banner2-section/Banner2.jsx";
import Footer from "./components/footer-section/Footer.jsx";

function App() {
    // Scroll to Top when route change
    const ScrollToTop = () => {
        const { pathname } = useLocation();

        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);

        return null;
    };

    const location = useLocation();
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: location.pathname });
    }, [location]);

    return (
        <>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
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
