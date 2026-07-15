import React, { useState } from "react";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
// import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "services", label: "Services" },
    { id: "work", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 lg:px-40 bg-[#161513]/80 backdrop-blur-md">
      {/* Logo */}
      <h1 className="text-3xl font-bold">
  <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
    AI
  </span>
</h1>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden"
      >
        <img src={menu_open} alt="Open Menu" className="w-8" />
      </button>

      {/* Navigation Menu */}
      <ul
        className={`fixed md:static top-0 ${
          isOpen ? "right-0" : "-right-full"
        } md:right-0 h-screen md:h-auto w-80 md:w-auto bg-[#330827] md:bg-transparent flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 pt-24 md:pt-0 pl-12 md:pl-0 transition-all duration-500 z-50`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 md:hidden"
        >
          <img src={menu_close} alt="Close Menu" className="w-8" />
        </button>

        {navItems.map((item) => (
          <li
            key={item.id}
            className="flex flex-col md:items-center gap-1 cursor-pointer"
          >
            <AnchorLink
              href={`#${item.id}`}
              offset="50"
              className="text-white no-underline text-2xl md:text-xl"
              onClick={() => {
                setMenu(item.id);
                setIsOpen(false);
              }}
            >
              {item.label}
            </AnchorLink>

            {menu === item.id && (
              <img
                src={underline}
                alt="underline"
                className="mx-auto"
              />
            )}
          </li>
        ))}
      </ul>

      {/* Connect Button */}
      <AnchorLink
        href="#contact"
        offset="50"
       className="hidden md:block px-8 py-4 rounded-full text-lg font-medium bg-gradient-to-r from-orange-500 to-purple-600 hover:scale-105 hover:shadow-lg transition-all duration-300"
      >
        Connect With Me
      </AnchorLink>
    </nav>
  );
};

export default Navbar;