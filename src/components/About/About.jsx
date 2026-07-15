import React from "react";
import themePattern from "../../assets/theme_pattern.svg";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";

import { HiSparkles } from "react-icons/hi2";
import { BsRobot } from "react-icons/bs";
// const skills = [
//   { skill: "React.js", width: "95%" },
//   { skill: "Node.js", width: "90%" },
//   { skill: "Express.js", width: "90%" },
//   { skill: "JavaScript", width: "95%" },
//   { skill: "Java", width: "85%" },
//   { skill: "MongoDB", width: "90%" },
//   { skill: "REST APIs", width: "90%" },
//   { skill: "AI Integration", width: "85%" },
// ];

const technologies = [
  {
    name: "React.js",
    icon: <FaReact />,
    color: "text-sky-400",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "text-green-500",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "text-gray-300",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "text-yellow-400",
  },
  {
    name: "Java",
    icon: <FaJava />,
    color: "text-red-500",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "text-green-600",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "text-blue-500",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    color: "text-sky-500",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "text-cyan-400",
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    color: "text-yellow-500",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "text-orange-500",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "text-white",
  },
  {
  name: "AI",
  icon: <BsRobot />,
  color: "text-emerald-400",
},
];

const highlights = [
  "Full Stack Development",
  "AI-Powered Applications",
  "REST API Development",
  "Responsive UI/UX",
  "Database Design",
  "LLM Integration",
  "Authentication & Security",
  "Problem Solving",
];

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-20 px-6 py-20 md:px-16 lg:px-40"
    >
      {/* Title */}
      <div className="relative">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold">
          About Me
        </h1>

        <img
          src={themePattern}
          alt=""
          className="absolute bottom-0 right-0 -z-10 w-28 md:w-36 lg:w-auto"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

        {/* Uncomment if you want profile image */}
        {/* 
        <div className="hidden lg:block">
          <img
            src={profileImg}
            alt="Md Altamash Iqbal"
            className="w-80 rounded-3xl border-4 border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.35)] hover:scale-105 transition duration-500"
          />
        </div>
        */}

        {/* Right */}
        <div className="flex flex-col gap-10">

          {/* About */}
          <div className="space-y-6 text-lg md:text-xl leading-9 text-gray-300">

  <p>
    Hello! I'm{" "}
    <span className="font-semibold text-white">
      Md Altamash Iqbal
    </span>
    , a passionate{" "}
    <span className="font-semibold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
      Full Stack Developer
    </span>{" "}
    dedicated to building scalable, AI-powered, and user-centric web
    applications that deliver seamless digital experiences.
  </p>

  <p>
    I specialize in developing modern web applications using{" "}
    <span className="text-white font-semibold">
      React.js, Next.js, Node.js, Express.js, Java, JavaScript,
      MongoDB, MySQL, PostgreSQL, Tailwind CSS, Firebase,
      REST APIs, Git, GitHub, OpenAI APIs,
      LLM Integration, and Prompt Engineering.
    </span>
  </p>

  <p>
    I enjoy solving real-world problems through clean architecture,
    responsive user interfaces, secure backend systems, and intelligent
    AI-powered solutions while continuously learning and exploring new
    technologies.
  </p>

</div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-[#1f1f1f] px-5 py-4 rounded-xl border border-gray-700 hover:border-purple-500 hover:scale-105 transition duration-300"
              >
                <HiSparkles className="text-orange-400 text-2xl flex-shrink-0" />

                <p className="text-gray-200">{item}</p>
              </div>
            ))}

          </div>

          {/* Skills
          <div className="space-y-6">

            {skills.map((item) => (
              <div
                key={item.skill}
                className="hover:scale-[1.02] transition duration-300"
              >
                <div className="flex justify-between mb-2">

                  <p className="font-medium text-lg text-white">
                    {item.skill}
                  </p>

                  <span className="text-purple-400 font-medium">
                    {item.width}
                  </span>

                </div>

                <div className="w-full h-3 rounded-full bg-gray-700 overflow-hidden">

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-orange-500 to-purple-600"
                    style={{ width: item.width }}
                  ></div>

                </div>

              </div>
            ))}

          </div> */}
          {/* Tech Stack */}

<div>

  <h2 className="text-3xl font-bold mb-8 text-white">
    Tech Stack
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

    {technologies.map((tech) => (

      <div
        key={tech.name}
        className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border border-gray-700 bg-[#1b1b1b] hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-300"
      >

        <div className={`text-5xl ${tech.color}`}>
          {tech.icon}
        </div>

        <h3 className="text-white font-semibold text-center">
          {tech.name}
        </h3>

      </div>

    ))}

  </div>

</div>


          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">

            <div className="text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                6+
              </h2>

              <p className="text-gray-400 mt-2">
                Projects
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                1
              </h2>

              <p className="text-gray-400 mt-2">
                Internship
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                2025
              </h2>

              <p className="text-gray-400 mt-2">
                Graduate
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                AI
              </h2>

              <p className="text-gray-400 mt-2">
                Powered Apps
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;