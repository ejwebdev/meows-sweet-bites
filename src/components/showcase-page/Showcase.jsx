import { useState } from "react";
import img1 from "../../assets/showcase1.webp";
import img2 from "../../assets/showcase2.webp";
import img3 from "../../assets/showcase3.webp";
import img4 from "../../assets/showcase4.webp";
import img5 from "../../assets/showcase5.webp";
import "./showcase.css";

const showcase = [
    {
        img: img1,
        class: "md:col-span-2 md:row-span-2",
        link: "https://www.facebook.com/jeycidiaz20/photos",
    },
    { img: img2, link: "https://www.facebook.com/jeycidiaz20/photos" },
    { img: img3, link: "https://www.facebook.com/jeycidiaz20/photos" },
    { img: img4, link: "https://www.facebook.com/jeycidiaz20/photos" },
    { img: img5, link: "https://www.facebook.com/jeycidiaz20/photos" },
];

function Showcase() {
    const [messageVisible, setMessageVisible] = useState(false);
    const handleLoadMore = () => {
        setMessageVisible(true);
        setTimeout(() => {
            setMessageVisible(false);
        }, 3000);
    };

    const showcaseDetails = (link) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <section className="showcase">
            <div className="showcase-cntnr">
                <h2>
                    <span className="material-symbols-rounded">line_end</span>
                    SHOWCASE
                </h2>
                <p>
                    Explore our delightful and unique sweet creations for every
                    occasion! Discover custom cakes and beautiful floral designs
                    expertly crafted with love at Meow&apos;s Sweet Bites.
                </p>
                <div className="showcase-grid">
                    {showcase.map((showcase, index) => (
                        <div key={index} className={showcase.class}>
                            <img
                                src={showcase.img}
                                draggable="false"
                                alt="Meow's Sweet Bites Showcase"
                            />
                            <div className="showcase-grid-link">
                                <button
                                    onClick={() =>
                                        showcaseDetails(showcase.link)
                                    }
                                >
                                    VIEW POST
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={handleLoadMore}>LOAD MORE</button>
                {messageVisible && <p>No more showcase to load.</p>}
            </div>
        </section>
    );
}

export default Showcase;
