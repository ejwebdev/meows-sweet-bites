import "./hero.css";

function Hero() {
    const smoothScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const buttonLink = () => {
        smoothScroll("products");
    };

    return (
        <section className="home" id="home">
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
                    <button onClick={buttonLink}>ORDER NOW</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
