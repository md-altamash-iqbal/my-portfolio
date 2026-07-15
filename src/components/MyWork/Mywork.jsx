import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Mywork = () => {
  return (
    <section
      id="work"
      className="flex flex-col items-center justify-center gap-20 px-6 py-20 md:px-16 lg:px-40"
    >
      {/* Title */}
      <div className="relative">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-center">
          My Latest Work
        </h1>

        <img
          src={theme_pattern}
          alt=""
          className="absolute bottom-0 right-0 -z-10 w-28 md:w-36 lg:w-auto"
        />
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 w-full">
        {mywork_data.map((work, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl hover:border-4 hover:border-fuchsia-500 transition-all duration-300"
          >
            <img
              src={work.w_img}
              alt={`Project ${index + 1}`}
              className="w-full h-64 lg:h-72 object-cover cursor-pointer hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Show More */}
      <button className="flex items-center gap-4 px-10 py-5 text-lg md:text-xl font-medium border-2 border-white rounded-full hover:gap-7 transition-all duration-500">
        <span>Show More</span>

        <img
          src={arrow_icon}
          alt="Arrow"
          className="w-5"
        />
      </button>
    </section>
  );
};

export default Mywork;