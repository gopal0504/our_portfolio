import React from "react";
import { FaLaptopCode, FaDatabase, FaRobot, FaMobileAlt } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaLaptopCode size={28} />,
      title: "Custom Software",
      desc: "Tailor-made desktop & web applications solving specific business or academic problems.",
    },
    {
      icon: <FaDatabase size={28} />,
      title: "Database Systems",
      desc: "Reliable database design, integration, and maintenance (MySQL, SQLite, backups, queries).",
    },
    {
      icon: <FaRobot size={28} />,
      title: "Automation & AI Prototyping",
      desc: "Automation scripts, basic AI/NLP prototypes and proof-of-concepts to speed up workflows.",
    },
    {
      icon: <FaMobileAlt size={28} />,
      title: "Web & Mobile Tools",
      desc: "Frontend interfaces, small web apps and PWA-ready tools to make your product accessible.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
          Services
        </h2>
        <p className="text-center text-gray-200 max-w-2xl mx-auto mb-12">
          We are Gopal & Archana — a software team building reliable, maintainable solutions.
          Below are the main services we provide. If you need something not listed, get in touch.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 flex gap-4 items-start shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className="p-3 rounded-md bg-white/8 text-yellow-300">
                {s.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-yellow-300">{s.title}</h3>
                <p className="mt-2 text-gray-200">{s.desc}</p>
                <div className="mt-4">
                  <a
                    href="/contact"
                    className="inline-block px-4 py-2 bg-yellow-400 text-black rounded-md font-semibold hover:bg-yellow-300 transition"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: short FAQs or process */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white/6 p-6 rounded-lg text-gray-100">
            <h4 className="font-semibold mb-2">How we work</h4>
            <p className="text-gray-300">Discovery → Prototype → Build → Support. We communicate weekly and deliver incremental milestones.</p>
          </div>
          <div className="bg-white/6 p-6 rounded-lg text-gray-100">
            <h4 className="font-semibold mb-2">Pricing</h4>
            <p className="text-gray-300">We offer fixed-price for well-defined scopes and hourly for research or ongoing work.</p>
          </div>
          <div className="bg-white/6 p-6 rounded-lg text-gray-100">
            <h4 className="font-semibold mb-2">Turnaround</h4>
            <p className="text-gray-300">Small projects: 1–3 weeks. Medium: 1–3 months. We’ll give a timeline with every quote.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
