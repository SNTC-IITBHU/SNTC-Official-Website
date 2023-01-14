import { useState } from "react"
import { navLinks } from "./constants";

const Navbar=()=>{
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState("Home");
    return (
        <nav id="home" className=" w-full flex py-[1%] justify-between items-center navbar">
      

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[20px] ${
              active === nav.title ? "text-white font-bold" : "text-stone-400"
            } ${index === navLinks.length - 1 ? "mr-8" : "mr-16"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center z-[100] pr-[2%] pt-[2%]">
        <img
          src={toggle ? "/close.svg" : "/menu.svg"}
          alt="menu"
          className="w-[28px] h-[28px] object-contain "
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-purple-900 absolute top-7 right-0 mx-4 my-4 min-w-[140px] rounded-xl sidebar `}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[14px] opacity-100 ${
                  active === nav.title ? "text-white" : "text-stone-300"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-2"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    )
}
export default  Navbar;