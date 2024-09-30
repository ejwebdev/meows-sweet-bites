import product1 from "../../assets/services1.png";
import product2 from "../../assets/services2.png";
import product3 from "../../assets/services3.png";
import product4 from "../../assets/services4.png";
import product5 from "../../assets/services5.png";
import product6 from "../../assets/services6.png";
import "./products.css";

const products = [
    {
        img: product1,
        title: "CUPCAKES",
        desc: "Miniature cakes, a popular choice for celebrations and sweet treats.",
    },
    {
        img: product2,
        title: "BENTO CAKES",
        desc: "Bento-style boxes perfect for individual servings and intimate celebrations.",
    },
    {
        img: product3,
        title: "SPECIAL CAKES",
        desc: "Crafted with premium and artistic ingredients making extraordinary celebration.",
    },
    {
        img: product4,
        title: "FLOWER BOUQUET",
        desc: "Brighten any occasion with our handpicked, vibrant flower bouquets.",
    },
    {
        img: product5,
        title: "CHOCOLATE BOUQUET",
        desc: "Delight with our chocolate bouquets, expertly arranged for a sweet gift.",
    },
    {
        img: product6,
        title: "MONEY BOUQUET",
        desc: "Gift luxury with our elegant money bouquets, crafted for special moments.",
    },
];

function Products() {
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
        <section className="products" id="products">
            <div className="products-cntnr">
                <h2>
                    <span className="material-symbols-rounded">line_end</span>
                    PRODUCTS
                </h2>
                <p>
                    Discover our delicious and finely crafted cakes at
                    SweetBites Cakery & Flowers, where each one is carefully
                    prepared to bring sweetness and joy to every special
                    occasion.
                </p>
                <div className="products-grid">
                    {products.map((products, index) => (
                        <div key={index}>
                            <img
                                src={products.img}
                                alt="Meow's Sweet Bites Services"
                                draggable="false"
                            />
                            <div className="products-grid-texts">
                                <h3>{products.title}</h3>
                                <p>{products.desc}</p>
                                <div onClick={buttonLink}>
                                    <p>Order Now</p>
                                    <span className="material-symbols-rounded">
                                        trending_flat
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Products;
