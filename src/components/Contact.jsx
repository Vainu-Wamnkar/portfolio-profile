import React from "react";

export default function Contact() {
  return (
    <section id="contact">
        <div className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>

        <form className="grid gap-4">
            <input className="p-3 bg-gray-800 rounded" placeholder="Your Name" />
            <input className="p-3 bg-gray-800 rounded" placeholder="Your Email" />
            <textarea className="p-3 bg-gray-800 rounded" rows="5" placeholder="Message"></textarea>

            <button className="px-6 py-3 bg-blue-600 rounded-lg">Send Message</button>
        </form>
        </div>
    </section>
  );
}
