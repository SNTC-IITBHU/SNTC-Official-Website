import React from "react";
import { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { clubsMenu } from "../public/clubsmenu.js";

const Clubspage = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Ourclubs");

  return (
    
    <div className="bg-black">
      {/* <section className="flex items-start relative top-2 w-[100%]"> */}
   
        <div id="content-wrapper" className="fixed pt-[75px] ">
          <ul className="flex flex-col  gap-8 pr-[9px] top-[80px] h-[100%]">
            {clubsMenu.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer flex items-center text-white pr-[20px] w-[98%] pl-[4px] list-none relative left-2 h-67px  font-montserrat not-italic font-semibold text-[28px] hover:bg-white hover:rounded-l-lg hover:text-black hover:w-[250px] ${
                  active === nav.title
                    ? ` z-[100] bg-white absolute text-black rounded-l-[10px] w-[250px]  `
                    : "text-stone-300"
                } ${
                  index === clubsMenu.length - 2
                    ? "2xl:mr-[12%] xl:mr-[12%] lg:mr-[8%] md:mr-[3%] sm:mr-[6%]"
                    : "2xl:mr-[20%] xl:mr-[20%] lg:mr-[12%] md:mr-[4%] sm:mr-[8%]"
                }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
     

      <div className="flex flex-col relative left-[195px] top-[20px] bottom-10px rounded-l-[100px] w-[1324px] box-border h-[100%] bg-gradient-to-b from-[#2D1634] to-[#1A091F]">
        <div className="pt-[20px] relative right-[60px]  font-sans pl-[30px] w-[700px] not-italic font-bold text-[50px] text-center text-white ">
          Check out our <span className="text-pink-700">clubs</span>
        </div>
        <h4 className="w-[1310px] text-justify pl-[80px] pr-[0px] leading-[32px] font-['Poppins'] pb-[20px] not-italic font-semibold text-[25px] text-white ">
          Science and Technology Council offers clubs for students interested in
          science and technology fields such as robotics, engineering,
          astronomy, and sustainability. These clubs offer hands-on experiences,
          projects, workshops, and competitions to deepen understanding and
          develop skills in these fields.
        </h4>
        <div id="AMC">
          <div className="pt-18px relative left-[30px] pl-[45px] pb-[5px]  font-serif not-italic font-bold text-[35px]  text-pink-700 ">
            Aero-Modelling Club
          </div>
          <div className="flex items-center justify-start pl-[85px] pb-[40px] pt-[10px]">
            <img
              className="w-[350px] h-[350px] realtive pl- rounded-[50px] outline outline-2 border-black"
              src="Aero (1).png"
              alt="AMC"
            />
            <h4 className="pl-[40px] font-['Poppins'] pr-[30px] pb-[10px] pt-[20px] leading-[32px] not-italic font-normal text-[25px] w-[900px] text-justify text-white tracking-wide">
              Unleash your potential in aeronautics and aerospace engineering
              with the Aero Club at IIT BHU. Learn through hands-on projects,
              workshops and expert talks. Explore the limitless possibilities of
              the field and develop your skills to new heights. The Aero Club
              provides a platform for students to tap into their potential and
              ignite their passion for this exciting field.
            </h4>
          </div>
        </div>

        <div id="ASTRO">
          <div className="pt-18px relative left-[30px] pl-[45px] pb-[5px]  font-serif not-italic font-bold text-[35px]  text-pink-700">
            Astronomy Club
          </div>
          <div className="flex items-center justify-start pl-[85px] pb-[40px] pt-[10px]">
            <img
              className="w-[350px] h-[350px] realtive pl- rounded-[50px] outline outline-2 border-black"
              src="Astro (1).png"
              alt="ASTRO"
            />
            <h4 className="pl-[40px] font-['Poppins'] pr-[30px] pb-[20px] pt-[10px] leading-[32px] not-italic font-normal text-[25px] w-[900px] text-justify text-white tracking-wide">
              Discover the mysteries of the cosmos with the Astro Club at IIT
              BHU. Our club is dedicated to fostering a love for astronomy and
              astrophysics among students, providing opportunities for hands-on
              learning and engagement. From observing the stars and celestial
              bodies through observation sessions, to gaining knowledge from
              industry experts during guest lectures, to participating in
              workshops and expanding your skills, the Astro Club at IIT BHU
              offers a unique and exciting journey through the universe. Explore
              the wonders of the cosmos and let your imagination soar to the
              stars.
            </h4>
          </div>
        </div>
        <div id="BIZ">
          <div className="pt-18px relative left-[30px] pl-[45px] pb-[5px]  font-serif not-italic font-bold text-[35px]  text-pink-700 ">
            Business Club
          </div>
          <div className="flex items-center justify-start pl-[85px] pb-[40px] pt-[10px]">
            <img
              className="w-[350px] h-[350px] realtive pl- rounded-[50px] outline outline-2 border-black"
              src="biz (1).png"
              alt="BIZ"
            />
            <h4 className="pl-[40px] font-['Poppins'] pr-[30px] pb-[20px] pt-[10px] leading-[32px] not-italic font-normal text-[25px] w-[900px] text-justify text-white tracking-wide">
              Empower yourself with the knowledge and skills to succeed in the
              business world through the Business Club at IIT BHU. Our club is
              dedicated to promoting an understanding of the business landscape
              and providing students with the tools necessary to succeed in the
              competitive and rapidly-changing world of business. From guest
              lectures by industry leaders to hands-on projects and workshops,
              students can gain a well-rounded understanding of the business
              world and develop the skills necessary to thrive in the workplace.
              Join us in our mission to equip the next generation of business
              leaders with the knowledge and skills necessary to succeed in the
              global marketplace.
            </h4>
          </div>
        </div>
        <div id="COPS">
          <div className="pt-18px relative left-[30px] pl-[45px] pb-[5px]  font-serif not-italic font-bold text-[35px]  text-pink-700">
            {" "}
            Club of Programmers{" "}
          </div>
          <div className="flex items-center justify-start pl-[85px] pb-[40px] pt-[10px]">
            <img
              className="w-[350px] h-[350px] realtive pl- rounded-[50px] outline outline-2 border-black"
              src="Cops (1).png"
              alt="COPS"
            />
            <h4 className="pl-[40px] font-['Poppins'] pr-[30px] pb-[20px] pt-[10px] not-italic leading-[32px] font-normal text-[25px] w-[900px] text-justify text-white tracking-wide">
              Empower yourself with the knowledge and skills of a top-notch
              programmer through the Club of Programmers at IIT BHU. Our club is
              dedicated to fostering a passion for computer programming among
              students and providing opportunities for hands-on learning and
              engagement. From participating in coding competitions and
              projects, to learning from industry experts through guest
              lectures, to sharpening your skills through workshops, the Club of
              Programmers at IIT BHU is your ticket to the world of computer
              programming. Whether you are a seasoned programmer or just
              starting out, join us in our mission to push the boundaries of
              technology and revolutionize the world through code.
            </h4>
          </div>
        </div>

        <div id="CSI">
          <div className="pt-18px relative left-[30px] pl-[45px] pb-[5px]  font-serif not-italic font-bold text-[35px]  text-pink-700 ">
            Club of Sustainability and Innovation
          </div>
          <div className="flex items-center justify-start pl-[85px] pb-[40px] pt-[10px]">
            <img
              className="w-[350px] h-[350px] realtive pl- rounded-[50px] outline outline-2 border-black"
              src="CSI (1).png"
              alt="CSI"
            />
            <h4 className="pl-[40px] font-['Poppins'] pr-[30px] pb-[20px] pt-[10px] not-italic leading-[32px] font-normal text-[25px] w-[900px] text-justify text-white tracking-wide">
              {" "}
              Our club is dedicated to promoting an understanding of sustainable
              development and fostering innovative thinking among students. From
              participating in workshops and projects focused on sustainable
              technology, to learning from experts in the field through guest
              lectures, to engaging in discussions about the future of
              sustainability, students can gain a comprehensive understanding of
              the role of sustainability in shaping the world of tomorrow.
              Whether you are passionate about the environment, or interested in
              cutting-edge technology, the Club of Sustainability and Innovation
              at IIT BHU is your gateway to shaping a sustainable future.
            </h4>
          </div>
        </div>
        <div id="ROBOTICS">
          <div className="pt-18px relative left-[30px] pl-[45px] pb-[5px]  font-serif not-italic font-bold text-[35px] text-pink-700 ">
            Robotics Club
          </div>
          <div className="flex items-center justify-start pl-[85px] pb-[40px] pt-[10px]">
            <img
              className="w-[350px] h-[350px] realtive pl- rounded-[50px] outline outline-2 border-black"
              src="Robo.png"
              alt="ROBOTICS"
            />
            <h4 className="pl-[40px] font-['Poppins'] pr-[30px] pb-[20px] pt-[10px] leading-[32px] not-italic font-normal text-[25px] w-[900px] text-justify text-white tracking-wide">
              Our club is dedicated to empowering students with the knowledge
              and skills necessary to thrive in the rapidly-evolving field of
              robotics. Whether you are a seasoned robotics enthusiast or just
              starting out, you all will find a wealth of opportunities for
              learning and growth within our club. From participating in
              hands-on projects and workshops, to learning from industry experts
              through guest lectures, to competing in coding competitions, the
              Robotics Club at IIT BHU is your launchpad for a successful career
              in robotics.
            </h4>
          </div>
        </div>
        <div id="SAE">
          <div className="pt-18px relative left-[30px] pl-[45px] pb-[5px]  font-serif not-italic font-bold text-[35px]  text-pink-700 ">
            SAE Collegiate Club
          </div>
          <div className="flex items-center justify-start pl-[85px] pb-[40px] pt-[10px]">
            {" "}
            <img
              className="w-[350px] h-[350px] realtive pl- rounded-[50px] outline outline-2 border-black"
              src="sae (1).png"
              alt="SAE"
            />
            <h4 className="pl-[40px] font-['Poppins'] pr-[30px] pb-[20px] pt-[10px] not-italic font-normal  leading-[32px] text-[25px] w-[900px] text-justify text-white tracking-wide">
              Our club is dedicated to providing students with a deep
              understanding of engineering technology and design principles, and
              empowering them with the skills necessary to succeed in this
              exciting field. Whether you are a seasoned engineer or just
              starting out, you all will find a wealth of opportunities for
              learning and growth within our club. From participating in
              hands-on projects and workshops, to learning from industry experts
              through guest lectures, to competing in design competitions, the
              SAE Club at IIT BHU is your launchpad for a successful career in
              engineering.
            </h4>
          </div>
        </div>
      </div>

      {/* </section> */}
    </div>
  );
};
export default Clubspage;
