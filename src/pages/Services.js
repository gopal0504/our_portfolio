// src/pages/Services.js
import React from "react";
import { FaLaptopCode, FaDatabase, FaRobot, FaServer } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      key: "custom",
      icon: <FaLaptopCode size={26} />,
      title: "Custom Software",
      desc:
        "Full-cycle desktop & web apps tailored to your workflows — from requirements to delivery and support.",
      bullets: ["Requirements & planning", "Reliable architecture", "Testing & maintenance"],
    },
    {
      key: "backend",
      icon: <FaServer size={26} />,
      title: "Backend & APIs",
      desc:
        "Design and build robust backend systems, REST APIs and microservices using Java, Spring, and SQL/NoSQL databases.",
      bullets: ["REST APIs", "Authentication", "Scalable services"],
    },
    {
      key: "data",
      icon: <FaDatabase size={26} />,
      title: "Database Systems",
      desc:
        "Schema design, optimization, and integration (MySQL, SQLite). Backups, migrations and query tuning included.",
      bullets: ["Schema design", "Queries & optimization", "Backups & migrations"],
    },
    {
      key: "automation",
      icon: <FaRobot size={26} />,
      title: "Automation & Tools",
      desc:
        "Automation scripts, small utilities and tooling to speed up repetitive workflows and improve productivity.",
      bullets: ["Automation scripts", "ETL helpers", "DevOps helpers"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
            Services
          </h1>
          <p className="mt-3 text-gray-200 max-w-2xl mx-auto">
            We are Gopal & Archana — a software team building reliable and maintainable solutions.
            Below are the core services we offer. If you need something different, contact us and we’ll craft a plan.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.key}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-white/6 text-yellow-300">{s.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-yellow-300">{s.title}</h3>
                  <p className="mt-2 text-gray-200">{s.desc}</p>

                  <ul className="mt-3 list-disc list-inside text-gray-300">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="text-sm">{b}</li>
                    ))}
                  </ul>

                  <div className="mt-4 flex gap-3">
                    <a
                      href="/contact"
                      className="inline-block px-4 py-2 bg-yellow-400 text-black rounded-md font-semibold hover:bg-yellow-300 transition"
                    >
                      Get a Quote
                    </a>
                    <a
                      href="/projects"
                      className="inline-block px-4 py-2 border border-white/20 rounded-md hover:bg-white/10 transition text-sm"
                    >
                      See Related Projects
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small FAQ / Process */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white/6 p-6 rounded-lg text-gray-100">
            <h4 className="font-semibold mb-2">How we work</h4>
            <p className="text-gray-300">Discovery → Prototype → Build → Support. Clear milestones and weekly updates.</p>
          </div>
          <div className="bg-white/6 p-6 rounded-lg text-gray-100">
            <h4 className="font-semibold mb-2">Pricing</h4>
            <p className="text-gray-300">Fixed-price for defined scope, hourly for research or ongoing work.</p>
          </div>
          <div className="bg-white/6 p-6 rounded-lg text-gray-100">
            <h4 className="font-semibold mb-2">Delivery</h4>
            <p className="text-gray-300">Small projects: 1–3 weeks. Medium: 1–3 months. Timeline shared with quote.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
