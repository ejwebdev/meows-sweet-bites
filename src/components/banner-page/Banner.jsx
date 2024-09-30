import "./banner.css";

function Banner() {
    const smoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const buttonLink = () => {
        smoothScroll("contact");
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
                <button onClick={buttonLink}>ORDER NOW</button>
            </div>
        </section>
    );
}

export default Banner;
