import React from "react";
import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Image from "next/image";
import Link from "next/link";

import { clubscontent } from "../public/clubsContent.js";

const ClubsPage = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Ourclubs");

  return (
    <div className="mt-24 ">
      {/* <section className="flex items-start relative top-2 w-[100%]"> */}

      <div id="content-wrapper" className="  fixed pt-[55px] mt-[32px] ">
        <ul className="flex flex-col  gap-5 pr-[9px]  h-[100%]">
          
          {clubscontent.map((nav, index) => (
            <Link href={`#${nav.id}`}>
            <li
              key={nav.id}
              className={`  cursor-pointer flex items-center text-white pr-[20px] w-[98%] pl-[4px] list-none relative left-2 h-67px not-italic font-semibold text-[28px] hover:bg-white hover:rounded-l-lg  hover:text-black hover:text-opacity-50 hover:w-[192px] ${
                active === nav.id
                  ? `  bg-white -z-10 text-black rounded-l-[10px] w-[192px]  `
                  : "text-stone-300"
              } ${
                index === clubscontent.length - 2
                  ? " 2xl:mr-[12%] xl:mr-[12%] lg:mr-[8%] md:mr-[3%] sm:mr-[6%]"
                  : "2xl:mr-[20%] xl:mr-[20%] lg:mr-[12%] md:mr-[4%] sm:mr-[8%]"
              }`}
              onClick={() => setActive(nav.id)}
            >
              {nav.title}
              
            </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="flex flex-col fixed bottom-10px rounded-l-[100px] xl:w-[86.75%] box-border ml-[200px] mt-[5px] h-[100%] bg-gradient-to-b from-[#2D1634] to-[#1A091F]">
        <div className=" overflow-y-scroll overflow-x-hidden mb-[100px]">
          <div className="mt-16 pt-[20px] relative  md:right-[60px] pl-[60px] pr-10 md:pr-0  md:pl-[30px] w-[320px] md:w-[700px] not-italic font-bold text-[25px] md:text-[50px] text-center text-white ">
            Check out our <span className="text-pink-700">clubs</span>
          </div>
          <h4 className="  w-[98.9%] text-center md:text-justify pl-[80px] pr-[40px] md:pr-[0px] leading-[20px] md:leading-[32px] pb-[20px] not-italic font-semibold text-[18px] md:text-[25px] text-white ">
            Science and Technology Council offers clubs for students interested
            in science and technology fields such as <span className="text-pink-700 font-semibold">robotics, engineering,
            astronomy, and sustainability</span>. These clubs offer hands-on
            experiences, projects, workshops, and competitions to deepen
            understanding and develop skills in these fields.
          </h4>

          <>
            {clubscontent.map((nav, index) => (
              <div id={nav.id} key={index}>
             
              <div className="pt-18px relative left-[30px] pl-[45px] pb-[5px] mr-[32px] md:mr-0 md:text-[35px] font-bold not-italic text-[25px] text-pink-700 ">
                  {nav.name }
                </div>
                <div className=" mb-14 flex m-auto md:m-0 items-center xl:justify-start xl:pl-[85px] pb-[40px] pt-[10px]">
                  <Image
                    className="shadow-lg shadow-purple-700  realtive block m-auto rounded-[30px] outline outline-2  border-[1.5px] border-spacing-10 border-gray-500 border-double"
                    src={nav.image}
                    alt={nav.id}
                    width={200}
                    height={200}
      
                    
                  ></Image>
                  <h4 className="cursor-pointer mx-10   rounded-lg  mt-5 pl-[40px] pr-[30px] pb-[10px] pt-[20px] leading-[20px] md:leading-[32px] not-italic font-normal text-[20px] md:text-[18px] w-[900px] text-center md:text-justify text-white tracking-wide">
                    {nav.description}
                  </h4>
                 
                
                </div>
              </div>
            ))}
          </>
        </div>

        {/* </section> */}
      </div>
    </div>
  );
};
export default ClubsPage;
