import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const SERVICE_ID = "service_nacjwqo";
const TEMPLATE_ID = "template_2xusxos";
const PUBLIC_KEY = "cpQg0UfwQjI4pmhii";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("FORM SUBMITTED");
        console.log("Sending:", formData);

        try {
            const result = await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                },
                PUBLIC_KEY
            );

            console.log("EmailJS response:", result);

            setFormData({
                name: "",
                email: "",
                message: ""
            });

            alert("Message sent successfully!");

        } catch (error) {
            console.error("EmailJS error:", error);
            alert("Failed to send message: " + (error?.text || "Unknown error"));
        }
    };

    return (
        <div className="contact-bg">
            <h1 className="label">contact me.</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            name: e.target.value
                        })
                    }
                    required
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            email: e.target.value
                        })
                    }
                    required
                />

                <textarea
                    placeholder="Drop a note with any website feedback or career opportunities, or just say hi. Where are you from? 😊"
                    value={formData.message}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            message: e.target.value
                        })
                    }
                    required
                />

                <button type="submit">
                    Send Message ➤
                </button>
            </form>
        </div>
    );
}

export default Contact;