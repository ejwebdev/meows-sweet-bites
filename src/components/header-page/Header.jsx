import { useState, useEffect } from "react";
import "./header.css";

function Header() {
    // Scroll-based Background Change
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const refreshPage = () => {
        window.location.href = "";
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const smoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const links = (id, event) => {
        event.preventDefault();
        setIsMenuOpen(false);
        smoothScroll(id);
    };

    return (
        <header
            className={`header ${
                isScrolled ? "bg-priBG shadow" : "bg-transparent"
            }`}
        >
            <nav className="nav">
                <div onClick={refreshPage}>Sweet Bites</div>
                <ul className={isMenuOpen ? "left-0" : "-left-[200%]"}>
                    <li>
                        <a href="#home" onClick={(e) => links("home", e)}>
                            HOME
                        </a>
                    </li>
                    <li>
                        <a
                            href="#products"
                            onClick={(e) => links("products", e)}
                        >
                            PRODUCTS
                        </a>
                    </li>
                    <li>
                        <div onClick={refreshPage}>Sweet Bites</div>
                    </li>
                    <li>
                        <a href="#about" onClick={(e) => links("about", e)}>
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#contact" onClick={(e) => links("contact", e)}>
                            CONTACT
                        </a>
                    </li>
                </ul>
                <span className="material-symbols-rounded" onClick={toggleMenu}>
                    {isMenuOpen ? "close" : "segment"}
                </span>
            </nav>
        </header>
    );
}

export default Header;
