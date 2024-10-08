import { useNavigate } from "react-router-dom";
import "./pricing.css";

const pricing = [
    {
        title: "CAKES",
        perks: [
            "Bento • 4x2 • ₱220",
            "Mini • 5x2 • ₱280",
            "Mini • 5x4 • ₱380",
            "Cake • 6x3 • ₱450",
            "Cake • 6x4 • ₱600",
            "In Tub • 8x12 • ₱480",
            "In Cup • 7oz • ₱70",
        ],
    },
    {
        title: "CUPCAKES",
        perks: [
            "Simple • 4pcs • ₱150",
            "Floral • 4pcs • ₱180",
            "Simple • 6pcs • ₱250",
            "Floral • 6pcs • ₱280",
            "Simple • 12pcs • ₱450",
            "Floral • 12pcs • ₱550",
        ],
    },
    {
        title: "BOUQUET",
        perks: [
            "Chocolate • ₱250-500",
            "Single • ₱150-250",
            "Handmade • ₱350-550",
            "Fresh • ₱650-950",
            "Money • ₱800-900",
        ],
    },
    {
        title: "CAKE BUNDLE",
        perks: [
            "Bento & 2 Simple • ₱350",
            "Bento & 2 Floral • ₱450",
            "Bento & 8 Simple • ₱600",
            "Bento & 8 Floral • ₱700",
        ],
    },
];

function Pricing() {
    const navigate = useNavigate();
    const orderNowClick = () => {
        navigate("/contact");
        window.scrollTo(0, 0);
    };

    return (
        <section className="pricing" id="price">
            <div className="pricing-cntnr">
                <h2>
                    <span className="material-symbols-rounded">line_end</span>
                    PRICE LISTS
                </h2>
                <p>
                    Discover our cakes and floral arrangements at Meow&apos;s
                    Sweet Bites. We offer carefully crafted options to suit any
                    occasion and budget, making your occasion unforgettable.
                </p>
                <div className="pricing-grid">
                    {pricing.map((pricing, index) => (
                        <div key={index}>
                            <h3>{pricing.title}</h3>
                            <p>Choose your order below.</p>
                            <hr />
                            <div className="pricing-grid-perks">
                                {pricing.perks.map((perks, perksIndex) => (
                                    <div key={perksIndex}>
                                        <span className="material-symbols-rounded">
                                            check_small
                                        </span>
                                        <p>{perks}</p>
                                    </div>
                                ))}
                            </div>
                            <button onClick={orderNowClick}>ORDER NOW</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Pricing;
