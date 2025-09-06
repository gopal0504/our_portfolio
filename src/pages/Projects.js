// src/pages/Projects.js
import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Expense Tracker",
      desc: "A Java-based expense management tool.",
      tech: ["Java", "MySQL", "Swing"],
      link: "https://github.com/",
      owner: "gopal",
    },
    {
      title: "Exam Seating System",
      desc: "JavaFX system for auto seat allocation.",
      tech: ["JavaFX", "OOP", "SQL"],
      link: "https://github.com/",
      owner: "archana",
    },
    {
      title: "Portfolio Website",
      desc: "This portfolio site, built with React & Tailwind!",
      tech: ["React", "TailwindCSS", "Framer Motion"],
      link: "https://github.com/",
      owner: "gopal",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700 py-16 px-6 text-white">
      {/* Heading */}
      <h2 className="text-5xl font-extrabold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
        Our Projects
      </h2>

      {/* ---------------------------
          OPTIONAL FILTER BAR (commented)
          Uncomment to enable filters like All | Gopal | Archana
         --------------------------- */}
      {/*
      // To enable filtering:
      // 1) uncomment the useState import at top: import React, { useState } from "react";
      // 2) uncomment these lines and the filteredProjects usage below.
      // const [filter, setFilter] = useState("all");
      // const filteredProjects = filter === "all" ? projects : projects.filter(p => p.owner === filter);

      <div className="max-w-6xl mx-auto mb-8 flex justify-center gap-4">
        <button
          onClick={() => setFilter("all")}
          className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition"
        >
          All
        </button>
        <button
          onClick={() => setFilter("gopal")}
          className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition"
        >
          Gopal
        </button>
        <button
          onClick={() => setFilter("archana")}
          className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition"
        >
          Archana
        </button>
      </div>
      */}

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transform transition"
          >
            <h3 className="text-2xl font-semibold mb-3 text-yellow-300">{p.title}</h3>
            <p className="text-gray-200 mb-4">{p.desc}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t, idx) => (
                <span key={idx} className="px-3 py-1 bg-white/20 text-sm rounded-full">
                  {t}
                </span>
              ))}
            </div>

            {/* Owner badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs bg-white/10 rounded-full">
                {p.owner === "gopal" ? "Gopal" : "Archana"}
              </span>
            </div>

            {/* Button */}
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 mt-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
