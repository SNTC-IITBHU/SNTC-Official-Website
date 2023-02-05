import Amongusbg from "./Amongusbg";
const Hero=()=>{
    return (
        <div id="home" className="bg-black h-screen">
            <div className="absolute w-[83%] top-[28%] left-[8%] 2xl:top-[35%] xl:top-[35%]  lg:top-[40%] md:top-[30%] 2xl:left-[23%] xl:left-[27%] lg:left-[23%] md:left-[13%] 2xl:w-[55%] xl:w-[55%] lg:w-[55%] z-[100] ">
            <img src="/maintitle.svg" className="w-[100%] mb-[2%]"></img>
            <img src="/tagline.svg" className="w-[100%]"></img>
            </div>
            <img src="/mainlogo.svg" className="absolute  top-[20%] 2xl:top-[3.5%] xl:top-[17%] lg:top-[22%] md:top-[19%]  2xl:left-[5.6%] xl:left-[19%] lg:left-[15%] 2xl:w-[90%] lg:w-[65%]"></img>
        </div>
    )
}
export default Hero;