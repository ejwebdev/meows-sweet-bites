import { useNavigate } from "react-router-dom";
import "./hero.css";

function Hero() {
    const navigate = useNavigate();
    const orderNowClick = () => {
        navigate("/products");
    };

    return (
        <section className="home">
            <div className="home-cntnr">
                <div className="home-left">
                    <h1>Meow&apos;s</h1>
                    <h2>
                        <span className="material-symbols-rounded">
                            line_end
                        </span>
                        CAKERY & FLOWERS
                    </h2>
                    <p>
                        Meow&apos;s Sweet Bites offers the best cakes and
                        flowers made with love, carefully crafted for you and
                        your special moments. Order Now!
                    </p>
                    <button onClick={orderNowClick}>ORDER NOW</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
