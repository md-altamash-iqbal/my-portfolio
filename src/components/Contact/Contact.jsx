import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "b6c38d3d-6660-4636-a271-7b6c37da7db4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center gap-20 px-6 py-20 md:px-16 lg:px-40"
    >
      {/* Title */}
      <div className="relative">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold px-0 md:px-8">
          Get in Touch
        </h1>

        <img
          src={theme_pattern}
          alt=""
          className="absolute bottom-0 right-0 -z-10 w-28 md:w-36 lg:w-auto"
        />
      </div>

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-16 lg:gap-36 w-full">
        {/* Left */}
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
            Let's Talk
          </h1>

          <p className="max-w-xl text-gray-300 text-lg md:text-xl leading-8">
            I'm actively looking for Full Stack Developer opportunities,
            freelance projects, and collaborations. Whether you have an exciting
            idea, a job opportunity, or simply want to connect, I'd love to hear
            from you.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-5 text-gray-300 text-lg md:text-xl">
              <img src={mail_icon} alt="Mail" className="w-6 h-6" />
              <a
                href="mailto:altamashiqbal70@gmail.com"
                className="hover:text-orange-400 transition"
              >
                altamashiqbal70@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-5 text-gray-300 text-lg md:text-xl">
              <img src={call_icon} alt="Phone" className="w-6 h-6" />
              <a
                href="tel:+919771929356"
                className="hover:text-orange-400 transition"
              >
                +91 9771929356
              </a>
            </div>

            <div className="flex items-center gap-5 text-gray-300 text-lg md:text-xl">
              <img src={location_icon} alt="Location" className="w-6 h-6" />
              <p>Patna, Bihar, India</p>
            </div>
            <div className="flex gap-5 mt-5">
              <a
                href="https://github.com/md-altamash-iqbal"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-[#1f1f1f] border border-gray-700 hover:border-orange-500 transition"
              >
                GitHub
              </a>

              <a
                href="YOUR_LINKEDIN"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-xl bg-[#1f1f1f] border border-gray-700 hover:border-blue-500 transition"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right */}
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-6 w-full max-w-2xl"
        >
          <label className="text-gray-300 text-lg md:text-xl font-medium">
            Your Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full h-16 px-5 rounded bg-[#323232] text-gray-300 outline-none border border-transparent focus:border-purple-500"
          />

          <label className="text-gray-300 text-lg md:text-xl font-medium">
            Your Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full h-16 px-5 rounded bg-[#323232] text-gray-300 outline-none border border-transparent focus:border-purple-500"
          />

          <label className="text-gray-300 text-lg md:text-xl font-medium">
            Your Message
          </label>

          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
            className="w-full p-6 rounded bg-[#323232] text-gray-300 outline-none border border-transparent focus:border-purple-500 resize-none"
          ></textarea>

          <button
            type="submit"
            className="self-start px-12 py-4 rounded-full text-white text-lg md:text-xl bg-gradient-to-r from-orange-500 to-purple-600 hover:scale-105 transition duration-300"
          >
            Submit Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
