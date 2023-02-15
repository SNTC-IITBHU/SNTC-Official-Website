import { useState } from "react"
import { navLinks } from "../public/constants";
const Navbar=()=>{
    const [toggle, setToggle] = useState(false);
    const [active, setActive] = useState("Home");
    return (

        <div className="flex z-190 bg-black">
            <div className="sm:fixed w-[40%] p-[0%] z-[190] sm:p-0 2xl:w-[20%] xl:w-[18%] lg:w-[18%] md:w-[20%] sm:w-[20%] opacity-100 m-1">
                <img src="/sidelogo.svg" className="z-[190] w-[60%] 2xl:w-[50%] mt-2 2xl:ml-4" ></img>
            </div>
           
            <div className= "fixed bg-black right-0 opacity-100 z-[180]  w-[85%] sm:flex hidden 2xl:w-[80%] xl:w-[83%] lg:w-[80%] md:w-[90%]  pl-0 md:pl-[24%] sm:w-[80%]">
                <div className="w-screen bg-black fixed right-0 2xl:h-[8vh] lg:h-[9.5vh] h-[5vh]"></div>
                <div className="fixed z-[100] top-0 right-0">
                    <ul className="list-none sm:flex hidden z-[100] justify-end items-center flex-1">
                        {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`mt-1 lg:mt-4 font-poppins font-normal  cursor-pointer z-[100]  2xl:text-[24px] xl:text-[20px] lg:text-[18px] md:text-[18px] sm:text-[14px] 2xl:mt-[4%] ${
                            active === nav.title ? ` z-[100] text-white font-bold underline underline-offset-8 decoration-white ` : "text-stone-300"
                            } ${index === navLinks.length - 1 ? "2xl:mr-[12%] xl:mr-[12%] lg:mr-[8%] md:mr-[3%] sm:mr-[6%]" : "2xl:mr-[20%] xl:mr-[20%] lg:mr-[12%] md:mr-[4%] sm:mr-[8%]"}`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="sm:hidden  flex flex-1 justify-end items-center z-[200] pr-[2%] pt-0">
        <img
          src={toggle ? "/close.svg" : "/menu.svg"}
          alt="menu"
          className="fixed  top-2 right-3 w-[30px] h-[34px] object-contain opacity-100 z-[100]"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex "
          }  p-6 bg-[#240631] opacity-100 fixed top-[7%] right-0 mx-4 my-0 min-w-[140px] rounded-xl sidebar z-[900] `}
        >
          <ul className="list-none opacity-100 flex justify-end items-start flex-1 flex-col z-[100]">
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