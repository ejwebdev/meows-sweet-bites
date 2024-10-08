import { Link, useLocation } from "react-router-dom";
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

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const location = useLocation();
    const bgColor =
        location.pathname === "/"
            ? isScrolled
                ? "bg-priBG shadow fixed"
                : "bg-transparent fixed"
            : "bg-priBG shadow sticky";

    // Event Listener
    const pageLinks = () => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
        window.scrollTo(0, 0);
    };

    return (
        <header className={`header ${bgColor}`}>
            <nav className="nav">
                <div onClick={refreshPage}>Sweet Bites</div>
                <ul className={isMenuOpen ? "left-0" : "-left-[200%]"}>
                    <li>
                        <Link to="/" onClick={pageLinks}>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <a
                            href=""
                            onClick={(e) => {
                                e.preventDefault();
                                toggleDropdown();
                            }}
                        >
                            PRODUCTS
                            <span className="material-symbols-rounded">
                                keyboard_arrow_down
                            </span>
                        </a>
                        <ul
                            className={`dropdown ${
                                isDropdownOpen ? "open" : "hidden"
                            }`}
                        >
                            <li>
                                <Link to="/products" onClick={pageLinks}>
                                    OFFERS
                                </Link>
                            </li>
                            <li>
                                <Link to="/price-lists" onClick={pageLinks}>
                                    PRICE LISTS
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div onClick={refreshPage}>Sweet Bites</div>
                    </li>
                    <li>
                        <Link to="/about" onClick={pageLinks}>
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={pageLinks}>
                            CONTACT
                        </Link>
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
