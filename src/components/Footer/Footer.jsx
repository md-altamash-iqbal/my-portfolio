import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-6 py-12 md:px-16 lg:px-40 border-t border-gray-800">

      {/* Top */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

        {/* Left */}
        <div className="text-center lg:text-left">

          <h2 className="text-3xl font-bold">
            <span className="text-white">Md </span>
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              Altamash Iqbal
            </span>
          </h2>

          <p className="mt-4 max-w-md text-gray-400 leading-8">
            Full Stack Developer passionate about building scalable,
            AI-powered, and user-friendly web applications using modern
            technologies.
          </p>

        </div>

        {/* Social Icons */}
        <div>

          <h3 className="text-xl font-semibold mb-5 text-center">
            Let's Connect
          </h3>

          <div className="flex gap-5">

            <a
              href="https://github.com/md-altamash-iqbal"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-[#1b1b1b] flex items-center justify-center border border-gray-700 hover:border-orange-500 hover:-translate-y-1 transition"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://linkedin.com/in/md-altamash-"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-[#1b1b1b] flex items-center justify-center border border-gray-700 hover:border-blue-500 hover:-translate-y-1 transition"
            >
              <FaLinkedin size={22} />
            </a>

            <a
              href="mailto:altamashiqbal70@gmail.com"
              className="w-12 h-12 rounded-full bg-[#1b1b1b] flex items-center justify-center border border-gray-700 hover:border-red-500 hover:-translate-y-1 transition"
            >
              <FaEnvelope size={22} />
            </a>

            <a
              href="https://instagram.com/altamashiqbal_"
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 rounded-full bg-[#1b1b1b] flex items-center justify-center border border-gray-700 hover:border-pink-500 hover:-translate-y-1 transition"
            >
              <FaInstagram size={22} />
            </a>

          </div>

        </div>

      </div>

      {/* Divider */}
      <hr className="my-10 border-gray-800" />

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-gray-400 text-sm">

        <p>
          © {new Date().getFullYear()} Md Altamash Iqbal. All Rights Reserved.
        </p>

        <div className="flex gap-6">

          <a
            href="#"
            className="hover:text-orange-400 transition"
          >
            Privacy Policy
          </a>

          <a
            href="#"
            className="hover:text-orange-400 transition"
          >
            Terms
          </a>

          <a
            href="#contact"
            className="hover:text-orange-400 transition"
          >
            Contact
          </a>

        </div>

      </div>

    </footer>
  );
};

export default Footer;