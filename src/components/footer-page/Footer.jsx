import facebook from "../../assets/facebook.svg";
import tiktok from "../../assets/tiktok.svg";
import messenger from "../../assets/messenger.svg";
import instagram from "../../assets/instagram.svg";
import { useNavigate } from "react-router-dom";
import "./footer.css";

function Footer() {
    const smoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navigate = useNavigate();

    // Event Listener
    const links = (id, event) => {
        event.preventDefault();

        if (location.pathname === "/") {
            smoothScroll(id);
        } else {
            navigate("/", { replace: true });
            setTimeout(() => smoothScroll(id), 0);
        }
    };

    const refreshPage = () => {
        window.location.href = "";
    };
    const facebookLink = () => {
        window.open("https://www.facebook.com/jeycidiaz20", "_blank");
    };
    const tiktokLink = () => {
        window.open("https://www.tiktok.com/", "_blank");
    };
    const messengerLink = () => {
        window.open("https://www.messenger.com/t/102911715756664", "_blank");
    };
    const instagramLink = () => {
        window.open("https://www.instagram.com/", "_blank");
    };

    return (
        <section className="footer">
            <div className="footer-cntnr">
                <div className="footer-top">
                    <div onClick={refreshPage}>Sweet Bites</div>
                    <ul className="footer-links">
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
                            <a href="#about" onClick={(e) => links("about", e)}>
                                ABOUT
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                onClick={(e) => links("contact", e)}
                            >
                                CONTACT
                            </a>
                        </li>
                    </ul>
                    <div className="footer-socials">
                        <img
                            src={facebook}
                            alt="Eventify Facebook"
                            draggable="false"
                            rel="noopener noreferrer"
                            onClick={facebookLink}
                        />
                        <img
                            src={tiktok}
                            alt="Eventify Tiktok"
                            draggable="false"
                            rel="noopener noreferrer"
                            onClick={tiktokLink}
                        />
                        <img
                            src={messenger}
                            alt="Eventify Messenger"
                            draggable="false"
                            rel="noopener noreferrer"
                            onClick={messengerLink}
                        />
                        <img
                            src={instagram}
                            alt="Eventify Instagram"
                            draggable="false"
                            rel="noopener noreferrer"
                            onClick={instagramLink}
                        />
                    </div>
                </div>
                <hr />
                <div className="footer-bottom">
                    <p>&copy; 2024 Enrico Jay Sison</p>
                    <ul className="footer-links footer-bottom-links">
                        <li>
                            <a href="">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="">Terms of Service</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Footer;
