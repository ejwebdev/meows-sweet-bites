import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/header-page/Header.jsx";
import Default from "./pages/Default.jsx";
import Products from "./components/products-page/Products.jsx";
import Pricing from "./components/pricing-page/Pricing.jsx";
import About from "./pages/About.jsx";
import Contact from "./components/contact-page/Contact.jsx";
import Banner2 from "./components/banner2-page/Banner2.jsx";
import Footer from "./components/footer-page/Footer.jsx";

function App() {
    useEffect(() => {
        const location = window.location.pathname;
        window.gtag("config", "G-B0H2ZT4BZ9", {
            page_path: location,
        });
    }, []);

    return (
        <HashRouter>
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
        </HashRouter>
    );
}

export default App;
