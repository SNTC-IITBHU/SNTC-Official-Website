import { useState } from "react";
import { navLinks } from "../public/constants";
import Link from "next/link";
import Image from "next/image";
import Sidelogo from "../public/sidelogo.svg";
import Close from "../public/close.svg";
import Menu from "../public/menu.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const handleNavLinkClick = (title) => {
    setActive(title);
    setToggle(false); // Close the mobile menu when a link is clicked
  };

  return (
    <div className="flex z-50 bg-[#110414]">
      {/* Sidebar Logo */}
      <div className="sm:fixed w-[40%] p-[0%] sm:p-0 2xl:w-[20%] xl:w-[18%] lg:w-[18%] md:w-[20%] sm:w-[20%] opacity-100 m-1">
        <Link href={"/"}>
          <Image
            src={Sidelogo}
            alt="Logo"
            className="w-[50%] 2xl:w-[40%] mt-2 2xl:ml-4 lg:ml-3"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex bg-[#110414] z-[100] justify-end items-center flex-1">
        <ul className="list-none flex z-[100] justify-end items-center">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`mt-1 lg:mt-4 font-poppins font-normal tracking-wider cursor-pointer ${
                active === nav.title ? "text-white font-bold" : "text-stone-300"
              } ${
                nav === navLinks[navLinks.length - 1]
                  ? "mr-[8%]"
                  : "mr-[14%]"
              }`}
              onClick={() => setActive(nav.title)}
            >
              <Link href={nav.id}>{nav.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex flex-1 justify-end items-center z-[200] pr-[2%] pt-0">
        <Image
          src={toggle ? Close : Menu}
          alt="menu"
          className="w-[30px] h-[34px] object-contain cursor-pointer"
          onClick={toggleMenu}
        />

        {/* Mobile Menu */}
        <div className={`absolute top-0 right-0 ${toggle ? "block" : "hidden"}`}>
          <div className="bg-[#240631] p-6 rounded-xl">
            <ul className="list-none">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[14px] ${
                    active === nav.title ? "text-white" : "text-stone-300"
                  } ${nav === navLinks[navLinks.length - 1] ? "" : "mb-2"}`}
                  onClick={() => handleNavLinkClick(nav.title)}
                >
                  <Link href={nav.id}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
