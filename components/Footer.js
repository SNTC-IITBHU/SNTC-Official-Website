import Image from 'next/image'
import Temple from '../public/Footer/temple.svg'
import Footerlogo from '../public/Footer/footerlogo.svg'
import Linkedin from '../public/Footer/linkedin.svg'
import Instagram from '../public/Footer/instagram.svg'
import Facebook from '../public/Footer/facebook.svg'
import Youtube from '../public/Footer/youtube.svg'
import Newsletter from '../public/Footer/newsletter.svg'
const Footer=()=>{
    return (
        <div id="contacts" className=" relative 2xl:h-[17.4vw] lg:h-[16vw] lg:w-screen lg:bg-cover lg:bg-no-repeat  bg-[url('/Footer/footerwave.svg')] w-screen h-[45vw] bg-no-repeat">
           
           <Image src={Temple} className=" absolute top-[39%] left-[3%] 2xl:top-[18.4%] xl:top-[30%] lg:top-[32%] md:top-[20%] 2xl:left-[7%] xl:left-[2%] lg:left-[10%] xl:left-[3%] md:left-[4%] 2xl:w-[16%] xl:w-[20%] lg:w-[10%] md:w-[24%] w-[26%] bg-black"></Image>
           <span className="absolute 2xl:top-[86%] xl:top-[60%] lg:top-[80%] md:top-[65%] 2xl:left-[6.1%] xl:left-[3%] lg:left-[3.5%] md:left-[1.5%] text-white font-semibold text-[20px] 2xl:text-[19px]  md:text-[16px] text-[8px] top-[82%] left-[1%]"> <a href='mailto:gensec.sntc@iitbhu.ac.in'> Email: gensec.sntc@iitbhu.ac.in</a></span>
           
           <div className=" absolute 2xl:top-[27%] lg:top-[20%] md:top-[28%] 2xl:left-[31.7%] lg:left-[30%] md:left-[33%] 2xl:h-[71%] lg:h-[75%] md:h-[49%] bg-white xl:w-[0.15%] lg:w-[0.21%] md:w-[0.3%] w-[0.45%] top-[40%] left-[34%] h-[54%]"></div>
            <Image src={Footerlogo} className="absolute 2xl:top-[17%] xl:top-[29%] lg:top-[10%] md:top-[26%] 2xl:left-[37.5%] xl:left-[35%] lg:left-[37%] md:left-[33%] 2xl:w-[25%]  xl:w-[28%] lg:w-[26%] md:w-[40%] w-[44%] top-[37%] left-[31.8%]"></Image>
            <span className="absolute 2xl:top-[56%] xl:top-[43%] lg:top-[52%] md:top-[44%] 2xl:left-[42.1%] xl:left-[35.6%] lg:left-[42%] md:left-[36%] text-white font-bold 2xl:text-[32px] lg:text-[20px] md:text-[34px] text-[15px] top-[64%] left-[37%]">Connect with us</span>
            <Image src={Linkedin} onClick={() => window.open("https://www.linkedin.com/company/science-and-technology-council-iit-bhu-varanasi/?originalSubdomain=in")} className="absolute hover:cursor-pointer 2xl:top-[80%] xl:top-[51.2%] lg:top-[78%] md:top-[57%] 2xl:left-[42.5%] lg:left-[42%] md:left-[39%] 2xl:w-[2.7%] lg:w-[2%] top-[80%] left-[38%] w-[5%]"></Image>
            <Image src={Instagram} onClick={() => window.open("https://www.instagram.com/sntc.iitbhu/?hl=en")} className="absolute hover:cursor-pointer 2xl:top-[80%] xl:top-[51.2%] lg:top-[78%] md:top-[57%] 2xl:left-[46.5%] lg:left-[46%]  md:left-[46%] 2xl:w-[2.7%] lg:w-[2%] top-[80%] left-[46%] w-[5%]"></Image>
            <Image src={Facebook} onClick={() => window.open("https://www.facebook.com/sntc.iitbhu/")} className="absolute hover:cursor-pointer 2xl:top-[80%] xl:top-[51.2%] lg:top-[78%] md:top-[57%] 2xl:left-[50.5%] lg:left-[50%] md:left-[53%] 2xl:w-[2.7%] lg:w-[2%] top-[80%] left-[54%] w-[5%]"></Image>
            <Image src={Youtube} onClick={() => window.open("https://www.youtube.com/@scienceandtechnologycounci2602")} className="absolute hover:cursor-pointer 2xl:top-[78%] xl:top-[49.5%] lg:top-[75.2%] md:top-[55%] 2xl:left-[54.5%] lg:left-[53.9%] md:left-[60.2%] 2xl:w-[3.2%] lg:w-[2.7%] top-[79%] left-[62%] w-[5.8%]"></Image>
            <div className=" absolute 2xl:top-[26%] lg:top-[20%] md:top-[28%] 2xl:left-[68%] lg:left-[68%] md:left-[72%] 2xl:h-[72%] lg:h-[75%] md:h-[49%] bg-white xl:w-[0.15%] lg:w-[0.28%] md:w-[0.3%] w-[0.51%] top-[40%] right-[28%] h-[54%]"></div>
            <Image src={Newsletter} className="absolute 2xl:top-[25.5%] lg:top-[24%] md:top-[28%] 2xl:right-[11.5%] lg:right-[10%] md:right-[3%] 2xl:w-[10.5%] lg:w-[10.5%] md:w-[23%] w-[21%] top-[40%] right-[4.5%]"></Image>
            <span className="absolute 2xl:top-[69.6%] xl:top-[55%] lg:top-[68%] md:top-[59%] 2xl:right-[7.2%] xl:right-[3%] lg:right-[5%] md:right-[0.1%] text-white font-semibold 2xl:text-[19px] lg:text-[15px] md:text-[16px] text-[6.5px] right-[2%] top-[75%]">Subscribe to our Newsletter!</span>
            <form action="#" method="post" >
            <input className=" absolute 2xl:top-[82%] xl:top-[60%] lg:top-[83%] md:top-[67%] 2xl:right-[5.2%] xl:right-[7.5%] lg:right-[5%] md:right-[2%] 2xl:w-[20%] bg-black border-2 rounded-lg  p-1 lg:p-1.3 md:p-1 md:w-[21%] text-center font-regular text-white opacity-100 top-[81%] right-[2%] w-[23%] text-[8px] 2xl:text-[15px]" id='email' type='email' aria-label='email address' placeholder='Enter your email address' />
            </form>
        </div>
    )
}
export default Footer;