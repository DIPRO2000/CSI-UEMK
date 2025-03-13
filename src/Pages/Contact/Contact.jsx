import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const response = await fetch("https://csi-uemk.onrender.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } else {
            alert("Error sending message!");
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-gray-800 text-white rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block">Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full p-2 bg-gray-700 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-2 bg-gray-700 rounded" />
                </div>
                <div className="mb-4">
                    <label className="block">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required className="w-full p-2 bg-gray-700 rounded"></textarea>
                </div>
                <button type="submit" className="bg-green-500 p-2 rounded">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
