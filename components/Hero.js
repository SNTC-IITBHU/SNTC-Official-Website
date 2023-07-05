import Amongusbg from "./Amongusbg";
import Image from 'next/image'
import Maintitle from '../public/maintitle.svg'
import Tagline from '../public/tagline.svg'
import Mainlogo from '../public/mainlogo.svg'
const Hero=()=>{
    return (
        <div id="home" className="bg-[#110414] md:h-[75vh] h-[67vh] flex flex-col items-center justify-center">
            <div className="absolute w-[83%] top-[28%] 2xl:top-[35%] xl:top-[35%] lg:top-[40%] md:top-[30%] 2xl:w-[55%] xl:w-[55%] lg:w-[55%] z-[100] flex flex-col items-center justify-center">
            <Image src={Maintitle} className="w-[70%] mb-[2%] "></Image>
            <Image src={Tagline} className="w-[70%]"></Image>
            </div>
            <Image src={Mainlogo} className="absolute  top-[20%] 2xl:top-[3.5%] xl:top-[17%] lg:top-[22%] md:top-[19%] 2xl:w-[90%] lg:w-[65%]"></Image>
        </div> 
    )
}
export default Hero;