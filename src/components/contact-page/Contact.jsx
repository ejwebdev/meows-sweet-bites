import { useState } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const contactRight = [
    {
        icon: "home_work",
        title: "OUR ADDRESS",
        desc: "Sta. Lucia, Magalang, Pampanga",
    },
    {
        icon: "perm_phone_msg",
        title: "CONTACT US",
        desc: "+63994-416-1811",
    },
    {
        icon: "stacked_email",
        title: "EMAIL ADDRESS",
        desc: "zaidjessieyangg@gmail.com",
    },
];

function Contact() {
    const [notification, setNotification] = useState({ message: "", type: "" });

    const showNotification = (message, type) => {
        setNotification({ message, type });

        setTimeout(() => {
            setNotification({ message: "", type: "" });
        }, 3000);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_erca4ir",
                "template_6ll5m4f",
                e.target,
                "qHFSCAfpT8h7mF4gf"
            )
            .then(
                (response) => {
                    console.log("Success:", response);
                    showNotification("Message Sent!", "success");
                    e.target.reset();
                },
                (error) => {
                    console.error("Error:", error);
                    showNotification("Failed to Send.", "error");
                }
            );
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-cntnr">
                <div className="contact-left">
                    <form id="contact-form" onSubmit={sendEmail}>
                        <div className="contact-upper">
                            <div>
                                <label htmlFor="name">
                                    NAME<span>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    autoComplete="off"
                                    name="name"
                                    placeholder="Full Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">
                                    EMAIL<span>*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    autoComplete="off"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                />
                            </div>
                        </div>
                        <div className="contact-bottom">
                            <label htmlFor="message">
                                MESSAGE<span>*</span>
                            </label>
                            <textarea
                                id="message"
                                autoComplete="off"
                                name="message"
                                placeholder="Write Your Message Here"
                                required
                            ></textarea>
                        </div>
                        <button type="submit">SEND MESSAGE</button>
                        <p>
                            <strong>Note:</strong> Please check your email
                            address after sending your message.
                        </p>
                    </form>
                    {notification.message && (
                        <div className={`notification ${notification.type}`}>
                            {notification.message}
                        </div>
                    )}
                </div>
                <div className="contact-right">
                    <h2>
                        <span className="material-symbols-rounded">
                            line_end
                        </span>
                        CONTACT
                    </h2>
                    <p>
                        Have questions or want to place an order? Contact us
                        through our Mobile number or use the form below, and we
                        will get back to you shortly.
                    </p>
                    <div className="contact-right-grid">
                        {contactRight.map((contactRight, index) => (
                            <div key={index}>
                                <span className="material-symbols-rounded">
                                    {contactRight.icon}
                                </span>
                                <div>
                                    <h3>{contactRight.title}</h3>
                                    <p>{contactRight.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
