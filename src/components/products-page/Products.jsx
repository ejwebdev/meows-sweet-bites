import { Link } from "react-router-dom";
import product1 from "../../assets/product1.webp";
import product2 from "../../assets/product2.webp";
import product3 from "../../assets/product3.webp";
import product4 from "../../assets/product4.webp";
import product5 from "../../assets/product5.webp";
import product6 from "../../assets/product6.webp";
import "./products.css";

const products = [
    {
        img: product1,
        title: "CUPCAKES",
        desc: "Miniature cakes, a popular choice for celebrations and sweet treats.",
        link: "/price-lists",
    },
    {
        img: product2,
        title: "BENTO CAKES",
        desc: "Bento-style boxes perfect for individual servings and intimate celebrations.",
        link: "/price-lists",
    },
    {
        img: product3,
        title: "SPECIAL CAKES",
        desc: "Crafted with premium and artistic ingredients making extraordinary celebration.",
        link: "/price-lists",
    },
    {
        img: product4,
        title: "FLOWER BOUQUET",
        desc: "Brighten any occasion with our handpicked, vibrant flower bouquets.",
        link: "/price-lists",
    },
    {
        img: product5,
        title: "CHOCOLATE BOUQUET",
        desc: "Delight with our chocolate bouquets, expertly arranged for a sweet gift.",
        link: "/price-lists",
    },
    {
        img: product6,
        title: "MONEY BOUQUET",
        desc: "Gift luxury with our elegant money bouquets, crafted for special moments.",
        link: "/price-lists",
    },
];

function Products() {
    return (
        <section className="products" id="products">
            <div className="products-cntnr">
                <h2>
                    <span className="material-symbols-rounded">line_end</span>
                    PRODUCTS
                </h2>
                <p>
                    Discover our delicious and finely crafted cakes and flowers
                    at Meow&apos;s Sweet Bites, where each one is carefully
                    prepared to bring sweetness and joy to every special
                    occasion.
                </p>
                <div className="products-grid">
                    {products.map((products, index) => (
                        <div key={index}>
                            <img
                                src={products.img}
                                alt="Meow's Sweet Bites Products"
                                draggable="false"
                            />
                            <div className="products-grid-texts">
                                <h3>{products.title}</h3>
                                <p>{products.desc}</p>
                                <Link
                                    to={products.link}
                                    className="services-grid-link"
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                    }}
                                >
                                    <p>Price Lists</p>
                                    <span className="material-symbols-rounded">
                                        trending_flat
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Products;
