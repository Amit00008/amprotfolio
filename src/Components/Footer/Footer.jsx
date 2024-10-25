import React, { useEffect, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <footer
      id="Footer"
      className={`bg-gradient-to-r from-gray-900 to-black backdrop-blur-lg text-white p-6 md:p-12 shadow-lg rounded-lg flex flex-col md:flex-row justify-between items-center transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.8)" }}
    >
      <div className="flex flex-col items-start mb-4 md:mb-0">
        <h1 className="text-2xl md:text-5xl font-bold mb-2 animate__animated animate__fadeInLeft animate__delay-1s">
          Contact
        </h1>
        <h3 className="text-sm md:text-xl font-normal animate__animated animate__fadeInLeft animate__delay-1s">
          Feel free to reach out!
        </h3>
      </div>

      <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
        <li className="flex gap-2 items-center transition-transform duration-300 transform hover:scale-125 hover:translate-y-[-3px]">
          <MdOutlineEmail size={24} className="text-yellow-400" />
          <a href="mailto:amitdey1350@gmail.com" className="hover:underline">
            Mail
          </a>
        </li>
        <li className="flex gap-2 items-center transition-transform duration-300 transform hover:scale-125 hover:translate-y-[-3px]">
          <CiLinkedin size={24} className="text-blue-400" />
          <a
            href="https://www.linkedin.com/in/amit-dey-9b5627322/"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li className="flex gap-2 items-center transition-transform duration-300 transform hover:scale-125 hover:translate-y-[-3px]">
          <FaGithub size={24} className="text-gray-400" />
          <a href="https://github.com/Amit00008" className="hover:underline">
            GitHub
          </a>
        </li>
        <li className="flex gap-2 items-center transition-transform duration-300 transform hover:scale-125 hover:translate-y-[-3px]">
          <AiFillInstagram size={24} className="text-pink-400" />
          <a
            href="https://instagram.com/autisticamit"
            className="hover:underline"
          >
            Instagram
          </a>
        </li>
      </ul>

      <div className="text-sm md:text-base text-center">
        <p className="animate__animated animate__fadeInUp animate__delay-2s">
          © {new Date().getFullYear()} Amit Dey. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
