import { useNavigate } from "react-router-dom";
import "./banner2.css";

function Banner2() {
    const navigate = useNavigate();
    const orderNowClick = () => {
        navigate("/products");
    };

    return (
        <section className="banner2">
            <div className="banner2-cntnr">
                <h1>Custom Cakes and Flowers</h1>
                <p>
                    Our cakes and floral arrangements are custom-made daily with
                    care, using premium ingredients and fresh flowers to ensure
                    quality for every occasion.
                </p>
                <button onClick={orderNowClick}>
                    <span className="material-symbols-rounded">
                        arrow_forward
                    </span>
                </button>
            </div>
        </section>
    );
}

export default Banner2;
