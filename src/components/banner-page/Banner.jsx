import { useNavigate } from "react-router-dom";
import "./banner.css";

function Banner() {
    const navigate = useNavigate();
    const orderNowClick = () => {
        navigate("/contact");
        window.scrollTo(0, 0);
    };

    return (
        <section className="banner">
            <div className="banner-cntnr">
                <h1>Taste</h1>
                <h2>
                    <span className="material-symbols-rounded">line_end</span>
                    OF PURR-FECTION
                </h2>
                <p>
                    We delivers the finest cakes and flowers, lovingly crafted
                    with care for you and your cherished moments.
                </p>
                <button onClick={orderNowClick}>CONTACT US</button>
            </div>
        </section>
    );
}

export default Banner;
