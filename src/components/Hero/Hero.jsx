import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profileImg from "../../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 lg:px-20"
    >
      {/* Profile */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 blur-3xl opacity-40 scale-110"></div>

        <img
          src={profileImg}
          alt="Md Altamash Iqbal"
          className="
      relative
      w-48 h-48
      md:w-64 md:h-64
      lg:w-72 lg:h-72
      rounded-full
      object-cover
      object-top
      border-4 border-white
      shadow-2xl
      hover:scale-105
      transition-all
      duration-500
    "
        />
      </div>

      {/* Intro */}
      <p className="mt-8 text-lg md:text-xl text-orange-400 font-medium">
        👋 Hello, I'm
      </p>

      {/* Heading */}
      <h1 className="mt-3 max-w-5xl text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Md Altamash Iqbal
        </span>
      </h1>

      {/* Role */}
      <h2 className="mt-4 text-xl md:text-3xl text-gray-300 font-semibold">
        Full Stack Developer 
      </h2>

      {/* Description */}
      <p className="mt-6 max-w-3xl text-gray-400 text-lg md:text-xl leading-8">
        I build responsive, scalable, and high-performance web applications
        using{" "}
        <span className="text-white font-semibold">
          React.js, Next.js, Node.js, Express.js, MongoDB, and Java
        </span>
        . Passionate about creating clean user experiences and solving
        real-world problems with modern technologies.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-5">
        <AnchorLink
          href="#contact"
          offset="70"
          className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 font-semibold hover:scale-105 transition"
        >
          Hire Me
        </AnchorLink>

        <AnchorLink
          href="#work"
          offset="70"
          className="px-8 py-4 rounded-full border-2 border-white hover:border-purple-500 hover:text-purple-400 transition"
        >
          View Projects
        </AnchorLink>

        <a
          href="https://drive.google.com/file/d/1HjOpmI3ExdT-mMKEBT5kxQmnFIE8Rzuu/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full border-2 border-purple-500 bg-gradient-to-r from-orange-500 to-purple-600 hover:scale-105 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
