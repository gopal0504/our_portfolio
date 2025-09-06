import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f0c29] text-gray-300 py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        <p className="text-sm">
          © {new Date().getFullYear()} Gopal & Archana. All Rights Reserved 🚀
        </p>

        <div className="flex space-x-6 mt-4 md:mt-0 text-xl">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
