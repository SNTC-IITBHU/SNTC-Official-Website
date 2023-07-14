import Wave from "react-wavify";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useState } from "react";
import Image from "next/image";
import Meet from "../public/Contacts/Meet.svg";
import Img20 from "../public/Contacts/Aditya Kumar Singh.jpeg";
import Img21 from "../public/Contacts/Aditya surana.jpeg";
import Img22 from "../public/Contacts//Tanisha singh.jpeg";
const Contact = () => {
  const [isPaused, setIsPaused] = useState(true);
  return (
    <div className="relative ">
      {/* <AnimationOnScroll
        animateIn="animate__pulse"
        afterAnimatedIn={function (visible) {
          setIsPaused(false);
          setTimeout(() => {
            setIsPaused(true);
          }, 1500);
        }}
        afterAnimatedOut={function (visible) {
          setIsPaused(true);
        }}
      ></AnimationOnScroll> */}
      <Wave
        fill="#1E0226"
        paused={false}
        options={{
          height: 50,
          amplitude: 50,
          speed: 0.35,
          points: 3,
        }}
      />
      {/*<div className=" h-[70vh] w-screen relative -top-5 flex flex-col justify-around">*/}
      <div className="-mt-4 px-6 md:px-12 xl:px-32 p-8 bg-[#1E0226]">
        <Image
          className="h-[5vh] w-[80vw] mx-auto m-8"
          src={Meet}
          alt=""
        ></Image>
        {/*<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">*/}
        {/*  Meet our helm*/}
        {/*</h2>*/}
        {/* <div className="flex text-center flex-col sm:flex-row justify-around mb-[10vh] bg-contain bg-[url('/Contacts/Soundwaves+rectangle.svg')]">
          <div className="flex flex-col mt-4 mb-4 items-center sm:max-w-[33vw] mx-1">
            <Image
              className="w-[23vw] md:w-auto border-8 rounded-full"
              src={Img20}
              alt=""
            ></Image>
            <div className="m-auto text-cyan-50 font-bold text-sm">
             Aditya Kumar Singh
            </div>
            <div className="text-white m-auto text-sm">
              Joint General Secretary
            </div>
          </div>
          <div className="flex flex-col mt-4 mb-4 items-center sm:max-w-[33vw]">
            <Image
              className="w-[23vw] md:w-auto border-8 rounded-full"
              src={Img21}
              alt=""
            ></Image>
            <div className="m-auto text-cyan-50 font-bold text-sm">
              Aditya Surana
            </div>
            <div className="text-white m-auto text-sm">General Secretary</div>
          </div>
          <div className="flex flex-col mt-4 mb-4 items-center sm:max-w-[33vw]">
            <div>
            <Image
              className="w-64 cover border-8 rounded-full"
              src={Img22}
              alt=""
            ></Image>
            </div>
            <div className="m-auto text-cyan-50 font-bold text-sm">
              Tanisha Singh
            </div>
            <div className="text-white m-auto text-sm">
              Joint General Secretary
            </div>
          </div>
        </div> */}
        <div className="grid items-center gap-12 md:grid-cols-3 mb-4">
          <div className="space-y-4 text-center">
            <Image
              className="mx-auto h-64 w-64 rounded-xl object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
              src={Img21}
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            <div>
              <h4 className="text-2xl text-gray-700 dark:text-white">
                Aditya Surana
              </h4>
              <span className="block text-sm text-gray-500">
                Joint General Secretary
              </span>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <Image
              className="mx-auto h-64 w-64 rounded-xl object-cover md:h-64 md:w-48 lg:h-80 lg:w-64"
              src={Img20}
              alt="man"
              loading="lazy"
              width="1000"
              height="667"
            />
            <div>
              <h4 className="text-2xl text-gray-700 dark:text-white">
                Aditya Kumar Singh
              </h4>
              <span className="block text-sm text-gray-500">
                General Secretary
              </span>
            </div>
          </div>
          <div className="space-y-4 text-center">
            <Image
              className="mx-auto h-64 w-64 rounded-xl object-cover md:h-40 md:w-40 lg:h-64 lg:w-64"
              src={Img22}
              alt="woman"
              loading="lazy"
              width="1000"
              height="667"
            />
            <div>
              <h4 className="text-2xl text-gray-700 dark:text-white">
                Tanish Singh
              </h4>
              <span className="block text-sm text-gray-500">
                Joint General Secretary
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
