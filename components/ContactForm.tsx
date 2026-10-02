"use client";
import React, { useState } from "react";

const CONTACT_EMAIL = "chirag.2023ug1097@iiiitranchi.ac.in";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.open(
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <h2 className="text-2xl font-bold mb-2 text-white">Contact Me</h2>

      <input
        type="text"
        placeholder="Your name"
        name="name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white/90 border-0 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      <input
        type="email"
        placeholder="Your email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white/90 border-0 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      <textarea
        placeholder="Your message"
        name="message"
        required
        rows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full px-4 py-2 text-sm text-gray-800 placeholder-gray-400 bg-white/90 border-0 rounded-lg shadow resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
      />

      <button
        type="submit"
        className="mt-1 px-6 py-3 text-sm font-bold text-white uppercase tracking-wider rounded-lg bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-500 hover:to-blue-400 transition-all duration-200 shadow-lg"
      >
        Send Message →
      </button>

      <p className="text-[11px] text-gray-400 mt-1">
        Sends to{" "}
        <span className="text-purple-300">{CONTACT_EMAIL}</span>
      </p>
    </form>
  );
};

export default ContactForm;