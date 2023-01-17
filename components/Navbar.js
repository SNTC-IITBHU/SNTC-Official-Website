import { useState } from "react"
import { navLinks } from "../public/constants";
const Navbar=()=>{
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState("Home");
    return (
        <div className="flex">
            <div className="bg-black w-[40%] p-[1%] z-[100] sm:p-0 2xl:w-[20%] xl:w-[18%] lg:w-[18%] md:w-[20%] sm:w-[20%] opacity-80">
                <img src="/sidelogo.svg" className="z-[100" ></img>
            </div>
            <div className= "static opacity-80 z-[100]  bg-black w-[85%] sm:flex hidden 2xl:w-[80%] xl:w-[83%] lg:w-[90%] md:w-[90%]  pl-0 md:pl-[24%] sm:w-[80%]">
                <img src="/navbarbg.svg" className="list-none z-[100] sm:flex hidden"></img>
                <div className="absolute z-[100] top-0 right-0">
                    <ul className="list-none sm:flex hidden z-[100] justify-end items-center flex-1">
                        {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-poppins font-normal  cursor-pointer z-[100]  2xl:text-[20px] xl:text-[18px] lg:text-[18px] md:text-[18px] sm:text-[14px] ${
                            active === nav.title ? " z-[100] text-white font-bold underline decoration-red-600" : "text-stone-300"
                            } ${index === navLinks.length - 1 ? "2xl:mr-[12%] xl:mr-[12%] lg:mr-[8%] md:mr-[3%] sm:mr-[6%]" : "2xl:mr-[20%] xl:mr-[20%] lg:mr-[12%] md:mr-[4%] sm:mr-[8%]"}`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="sm:hidden flex flex-1 justify-end items-center z-[200] pr-[2%] pt-0">
        <img
          src={toggle ? "/close.svg" : "/menu.svg"}
          alt="menu"
          className="static top-0 w-[30px] h-[34px] object-contain z-[100]"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex static"
          }  p-6 bg-[#240631] absolute top-[7%] right-0 mx-4 my-4 min-w-[140px] rounded-xl sidebar z-[200] `}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col z-[100]">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[14px] z-[100] ${
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

            
            
        </div>
    )
}
export default Navbar;