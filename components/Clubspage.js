import React from "react";
import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";

import { clubscontent } from "../public/clubsContent.js";

const ClubsPage = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Ourclubs");

  return (
    <div className="bg-black mt-24">
      {/* <section className="flex items-start relative top-2 w-[100%]"> */}

      <div id="content-wrapper" className="fixed pt-[75px] mt-[10px] ">
        <ul className="flex flex-col  gap-8 pr-[9px]  h-[100%]">
          {clubscontent.map((nav, index) => (
            <li
              key={nav.id}
              className={`cursor-pointer flex items-center text-white pr-[20px] w-[98%] pl-[4px] list-none relative left-2 h-67px  font-montserrat not-italic font-semibold text-[28px] hover:bg-white hover:rounded-l-lg hover:text-black hover:w-[192px] ${
                active === nav.id
                  ? `  bg-white -z-10 text-black rounded-l-[10px] w-[192px]  `
                  : "text-stone-300"
              } ${
                index === clubscontent.length - 2
                  ? "2xl:mr-[12%] xl:mr-[12%] lg:mr-[8%] md:mr-[3%] sm:mr-[6%]"
                  : "2xl:mr-[20%] xl:mr-[20%] lg:mr-[12%] md:mr-[4%] sm:mr-[8%]"
              }`}
              onClick={() => setActive(nav.id)}
            >
              <a href={`#${nav.id}`}>{nav.id}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col  bottom-10px rounded-l-[100px] w-[1319px] box-border ml-[200px] mt-[20px] h-[100%] bg-gradient-to-b from-[#2D1634] to-[#1A091F]">
        <div className="pt-[20px] relative right-[60px]  font-sans pl-[30px] w-[700px] not-italic font-bold text-[50px] text-center text-white ">
          Check out our <span className="text-pink-700">clubs</span>
        </div>
        <h4 className="w-[1305px] text-justify pl-[80px] pr-[0px] leading-[32px] font-['Poppins'] pb-[20px] not-italic font-semibold text-[25px] text-white ">
          Science and Technology Council offers clubs for students interested in
          science and technology fields such as robotics, engineering,
          astronomy, and sustainability. These clubs offer hands-on experiences,
          projects, workshops, and competitions to deepen understanding and
          develop skills in these fields.
        </h4>

        <>
          {clubscontent.map((nav, index) => (
            <div id={nav.id} key={index}>
              <div className="pt-18px relative left-[30px] pl-[45px] pb-[5px]  font-serif not-italic font-bold text-[35px]  text-pink-700 ">
                {nav.name}
              </div>
              <div className="flex items-center justify-start pl-[85px] pb-[40px] pt-[10px]">
                <Image
                  className="realtive pl- rounded-[50px] outline outline-2 border-black"
                  src={nav.image}
                  alt={nav.id}
                  width={280}
                  height={280}
                />
                <h4 className="pl-[40px] font-['Poppins'] pr-[30px] pb-[10px] pt-[20px] leading-[32px] not-italic font-normal text-[25px] w-[900px] text-justify text-white tracking-wide">
                  {nav.description}
                </h4>
              </div>
            </div>
          ))}
        </>
      </div>

      {/* </section> */}
    </div>
  );
};
export default ClubsPage;
