import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header-page/Header.jsx";
import Default from "./pages/Default.jsx";
import Pricing from "./pages/Pricing.jsx";
import Footer from "./components/footer-page/Footer.jsx";

function App() {
    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Default />} />
                <Route path="/price-lists" element={<Pricing />} />
            </Routes>
            <Footer />
        </HashRouter>
    );
}

export default App;
