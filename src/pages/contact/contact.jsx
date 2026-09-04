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

        console.log("FORM SUBMITTED");
        console.log("Sending:", formData);

        try {
            const response = await fetch(
                "https://aif-backend-r51u.onrender.com/send",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        message: formData.message
                    })
                }
            );

            const data = await response.json();

            console.log("Server response:", data);

            if (response.ok && data.success) {
                console.log("Email sent successfully!");

                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });

                alert("Message sent successfully!");
            } else {
                console.error("Email send error:", data.error);
                alert("Failed to send message: " + (data.error || "Unknown error"));
            }

        } catch (error) {
            console.error("Request error:", error);
            alert("Could not connect to the email server.");
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