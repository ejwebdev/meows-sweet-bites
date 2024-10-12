import facebook from "../../assets/facebook.svg";
import tiktok from "../../assets/tiktok.svg";
import messenger from "../../assets/messenger.svg";
import instagram from "../../assets/instagram.svg";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
    // Event Listener
    const pageLinks = () => {
        window.scrollTo(0, 0);
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
                            <Link to="/" onClick={pageLinks}>
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" onClick={pageLinks}>
                                PRODUCTS
                            </Link>
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
                    <div className="footer-socials">
                        <img
                            src={facebook}
                            alt="Meow's Sweet Bites Facebook"
                            draggable="false"
                            rel="noopener noreferrer"
                            onClick={facebookLink}
                        />
                        <img
                            src={tiktok}
                            alt="Meow's Sweet Bites Tiktok"
                            draggable="false"
                            rel="noopener noreferrer"
                            onClick={tiktokLink}
                        />
                        <img
                            src={messenger}
                            alt="Meow's Sweet Bites Messenger"
                            draggable="false"
                            rel="noopener noreferrer"
                            onClick={messengerLink}
                        />
                        <img
                            src={instagram}
                            alt="Meow's Sweet Bites Instagram"
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
