import aboutImg from "../../assets/about-img.webp";
import "./about.css";

const aboutLeft = [
    {
        icon: "cake",
        title: "QUALITY PRODUCTS",
        desc: "We offer premium cakes and stunning, handmade bouquets.",
    },
    {
        icon: "box",
        title: "FAST DELIVERY",
        desc: "We always ensure fast, safe, and on-time delivery for all orders.",
    },
];

const aboutRight = [
    {
        icon: "widgets",
        title: "CUSTOM ORDERS",
        desc: "We offer customizable orders tailored to your preferences and needs.",
    },
    {
        icon: "account_balance_wallet",
        title: "ONLINE PAYMENT",
        desc: "We accept G-Cash payment to make your payment fast and easy.",
    },
];

function About() {
    return (
        <section className="about" id="about">
            <div className="about-cntnr">
                <h2>
                    <span className="material-symbols-rounded">line_end</span>
                    ABOUT
                </h2>
                <p>
                    Meow&apos;s Sweet Bites specializes in handcrafted cakes and
                    flowers that is made with love. We ensures every creation is
                    beautifully crafted, perfect for celebrating any occasions.
                </p>
                <div className="about-grid">
                    <div className="about-grid-left">
                        {aboutLeft.map((aboutLeft, indexLeft) => (
                            <div key={indexLeft}>
                                <span className="material-symbols-rounded">
                                    {aboutLeft.icon}
                                </span>
                                <div>
                                    <h3>{aboutLeft.title}</h3>
                                    <p>{aboutLeft.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="about-grid-middle">
                        <img
                            src={aboutImg}
                            alt="Meow's Sweet Bites About Image"
                            draggable="false"
                        />
                    </div>
                    <div className="about-grid-right">
                        {aboutRight.map((aboutRight, indexRight) => (
                            <div key={indexRight}>
                                <span className="material-symbols-rounded">
                                    {aboutRight.icon}
                                </span>
                                <div>
                                    <h3>{aboutRight.title}</h3>
                                    <p>{aboutRight.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
