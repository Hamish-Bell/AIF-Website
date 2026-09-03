import React, { useState } from 'react';
import './contact.css';

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://aif-backend-production.up.railway.app/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });

            if (response.ok) {
                console.log("Email sent successfully!");

                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
            } else {
                console.error("Email send error:", response);
            }
        } catch (error) {
            console.error("Email send error:", error);
        }
    };

    return (
        <div className='contact-bg'>
            <h1 className='label'>contact me.</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                <textarea
                    placeholder="Drop a note with any website feedback or career opportunities, or just say hi. Where are you from? 😊"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                <button type="submit">Send Message ➤</button>
            </form>
        </div>
    );
}

export default Contact;
