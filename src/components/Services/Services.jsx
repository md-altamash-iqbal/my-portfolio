import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center gap-20 px-6 py-20 md:px-16 lg:px-40"
    >
      {/* Heading */}
      <div className="relative text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
          <span className="text-white">What</span>{" "}
          <span className="text-white">I Do</span>
        </h1>

        <img
          src={theme_pattern}
          alt=""
          className="absolute bottom-0 right-0 -z-10 w-28 md:w-36 lg:w-auto"
        />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {Services_Data.map((service) => (
          <div
            key={service.s_no}
            className="group rounded-3xl border border-gray-700 bg-[#1b1b1b] p-8 hover:border-purple-500 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(168,85,247,0.35)] transition-all duration-300"
          >
            {/* Number */}
            <span className="text-sm tracking-[0.3em] uppercase text-orange-400">
              {service.s_no}
            </span>

            {/* Title */}
            <h2 className="mt-5 text-3xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
              {service.s_name}
            </h2>

            {/* Description */}
            <p className="mt-5 text-gray-400 leading-8">{service.s_desc}</p>

            {/* Button */}
            <div className="flex items-center gap-3 mt-8 cursor-pointer">
              <span className="font-semibold text-orange-400">Let's Build</span>

              <img
                src={arrow_icon}
                alt=""
                className="w-5 group-hover:translate-x-2 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
