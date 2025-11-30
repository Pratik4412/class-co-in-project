import React, { useEffect, useState } from "react";
import logo from "../assets/landingPage/logo.webp";
import { navbar_items } from "../data/text";
import { FiMenu, FiX } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const activePath = window.location.pathname;
  // const location = useLocation();

  const isHome = location.pathname === "/";
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 
        ${scrolled ? "bg-btn-gradient shadow-md py-1 " : "bg-transparent py-2"}
      `}
    >
      <div className="container mx-auto px-5 md:px-10 lg:px-20 bg-transparent w-[100%] flex items-center justify-between gap-6 z-50">
        <img
          src={logo}
          alt=""
          className={`transition-all duration-300 w-60 h-full ${
            scrolled ? "brightness-100" : "brightness-0 invert"
          }`}
        />
        <div>
          <ul
            className={`hidden md:flex items-center gap-8 transition-all duration-300 
            // ${scrolled ? "text-white" : "text-white"}
          `}
          >
            {navbar_items.map((item, i) => (
              <HashLink smooth to={item.path}>
                <li
                  className={`
      relative cursor-pointer font-medium
      after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
      after:bg-current after:transition-all after:duration-300
      hover:after:w-full
      ${activePath === item.path ? "after:w-full" : ""}
    `}
                >
                  {item.lable}
                </li>
              </HashLink>
            ))}
          </ul>
          <button
            className={`md:hidden text-3xl transition-all duration-300 ${
              scrolled ? "text-white" : "text-white"
            }`}
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <FiX /> : <FiMenu />}
          </button>
        </div>{" "}
        <div
          className={`md:hidden fixed top-[90px] z-50 left-0 w-full transition-all duration-300 ${
            openMenu
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }
          ${scrolled ? "bg-white" : "bg-white/90"}
        `}
        >
          <ul className="flex flex-col gap-4 px-6 py-4">
            {navbar_items.map((item, i) => (
              // <a href={item.path} key={i} onClick={() => setOpenMenu(false)}>
              //   <li
              //     className={`py-2 text-lg ${
              //       scrolled ? "text-white" : "text-white"
              //     } border-b border-white/10`}
              //   >
              //     {item.lable}
              //   </li>
              // </a>
              <HashLink
                smooth
                to={item.path}
                key={i}
                onClick={() => setOpenMenu(false)}
              >
                <li
                  className={`py-2 text-lg ${
                    scrolled ? "text-black" : "text-black"
                  } border-b border-white/10`}
                >
                  {item.lable}
                </li>
              </HashLink>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
