import { useState } from "react";
import img1 from "../../assets/customer1.webp";
import img2 from "../../assets/customer2.webp";
import img3 from "../../assets/customer3.webp";
import img4 from "../../assets/customer4.webp";
import img5 from "../../assets/customer5.webp";
import img6 from "../../assets/customer6.webp";
import img7 from "../../assets/customer7.webp";
import img8 from "../../assets/customer8.webp";
import img9 from "../../assets/customer9.webp";
import img10 from "../../assets/customer10.webp";
import "./customers.css";

const customers = [
    {
        img: img1,
        class: "xl:col-span-2 xl:row-span-2",
        link: "https://www.facebook.com/jeycidiaz20/photos",
    },
    { img: img2, link: "https://www.facebook.com/jeycidiaz20/photos" },
    { img: img3, link: "https://www.facebook.com/jeycidiaz20/photos" },
    { img: img4, link: "https://www.facebook.com/jeycidiaz20/photos" },
    { img: img5, link: "https://www.facebook.com/jeycidiaz20/photos" },
    { img: img6, link: "https://www.facebook.com/jeycidiaz20/photos" },
    { img: img7, link: "https://www.facebook.com/jeycidiaz20/photos" },
    {
        img: img8,
        class: "xl:col-span-2 xl:row-span-2",
        link: "https://www.facebook.com/jeycidiaz20/photos",
    },
    { img: img9, link: "https://www.facebook.com/jeycidiaz20/photos" },
    { img: img10, link: "https://www.facebook.com/jeycidiaz20/photos" },
];

function Customers() {
    const [messageVisible, setMessageVisible] = useState(false);
    const handleLoadMore = () => {
        setMessageVisible(true);
        setTimeout(() => {
            setMessageVisible(false);
        }, 3000);
    };

    const customersDetails = (link) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <section className="customers">
            <div className="customers-cntnr">
                <h2>
                    <span className="material-symbols-rounded">line_end</span>
                    CUSTOMERS
                </h2>
                <p>
                    Explore our delightful and unique sweet creations for every
                    occasion! Discover custom cakes and beautiful floral designs
                    expertly crafted with love at Meow&apos;s Sweet Bites.
                </p>
                <div className="customers-grid">
                    {customers.map((customers, index) => (
                        <div key={index} className={customers.class}>
                            <img
                                src={customers.img}
                                draggable="false"
                                alt="Meow's Sweet Bites Showcase"
                            />
                            <div className="customers-grid-link">
                                <p
                                    onClick={() =>
                                        customersDetails(customers.link)
                                    }
                                >
                                    View Post
                                    <span className="material-symbols-rounded">
                                        arrow_forward
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={handleLoadMore}>LOAD MORE</button>
                {messageVisible && <p>No more customers to load.</p>}
            </div>
        </section>
    );
}

export default Customers;
