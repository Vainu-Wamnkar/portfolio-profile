import React, { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://portfolio-backend-a4on.onrender.com/api/contact/send", formData);

      alert("Message sent successfully!");

      setFormData({ name: "", email: "", message: "" });
      console.log(res.data)
    } catch (error) {
      console.error(error);
      alert("Error sending message!");
    }
  };

  return (
    <section id="contact">
      <div className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>

        <form className="grid gap-4" onSubmit={handleSubmit}>
          <input
            className="p-3 bg-gray-800 rounded"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            className="p-3 bg-gray-800 rounded"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            className="p-3 bg-gray-800 rounded"
            rows="5"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button className="px-6 py-3 bg-blue-600 rounded-lg">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
