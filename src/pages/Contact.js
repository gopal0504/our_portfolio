// src/pages/Contact.js
import React, { useState } from "react";
import * as emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  // env variables from .env.local and Vercel dashboard
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE || "";
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE || "";
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC || "";

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return false;
    if (!/\S+@\S+\.\S+/.test(form.email)) return false;
    return true;
  };

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  };

  const sendMailtoFallback = () => {
    const mailto = `mailto:gopalshivamsingh@gmail.com?subject=${encodeURIComponent(
      "Website enquiry from " + form.name
    )}&body=${encodeURIComponent(form.message + "\n\nFrom: " + form.name + " <" + form.email + ">")}`;
    window.location.href = mailto;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    // prepare params to match your EmailJS template
    const templateParams = {
      subject: "Website enquiry", // 👈 matches {{subject}}
      name: form.name,            // 👈 matches {{name}}
      email: form.email,          // 👈 matches {{email}}
      message: form.message,      // 👈 matches {{message}}
    };

    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      try {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } catch (err) {
        console.error("EmailJS send error:", err);
        sendMailtoFallback(); // fallback if EmailJS fails
        setStatus("success");
      }
    } else {
      // fallback if EmailJS is not configured
      sendMailtoFallback();
      setStatus("success");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 py-16 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
          Let’s Build Something Together
        </h2>
        <p className="text-center text-gray-200 mb-8">
          Tell us about your project, budget & timeline — we’ll reply within one business day.
        </p>

        <div className="bg-white/6 backdrop-blur-lg rounded-xl p-8 shadow-lg">
          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="p-3 rounded bg-white/10 border border-white/20 placeholder-gray-300"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className="p-3 rounded bg-white/10 border border-white/20 placeholder-gray-300"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="6"
              placeholder="Describe your project, needs, or question..."
              className="p-3 rounded bg-white/10 border border-white/20 placeholder-gray-300"
            />

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="px-6 py-3 bg-yellow-400 text-black rounded font-semibold hover:bg-yellow-300 transition disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              <a href="/projects" className="text-sm text-gray-200 hover:underline">
                View our work
              </a>
            </div>

            {/* status messages */}
            {status === "success" && (
              <p className="text-green-300">
                Message sent ✅ (or your mail client opened). We’ll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-300">
                Please fill all fields with a valid email before sending.
              </p>
            )}
          </form>
        </div>

        {/* quick contact cards */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-xl">
            <h4 className="font-semibold text-yellow-300">Email</h4>
            <p className="text-gray-200">hello@yourcompany.com</p>
            <p className="text-gray-400 mt-2 text-sm">Responses within 1 business day.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl">
            <h4 className="font-semibold text-yellow-300">Location</h4>
            <p className="text-gray-200">India (Remote / Work worldwide)</p>
            <p className="text-gray-400 mt-2 text-sm">Available for remote & contract work.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
