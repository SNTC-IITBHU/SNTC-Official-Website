const Footer=()=>{
    return (
        <div className=" relative 2xl:h-[30vw] lg:h-[16vw] lg:w-screen lg:bg-cover lg:bg-no-repeat  bg-[url('/Footer/footerwave.svg')] w-screen h-[53vw] bg-no-repeat">
           
           <img src="/Footer/temple.svg" className=" absolute top-[36%] left-[1.6%] 2xl:top-[28%] xl:top-[30%] lg:top-[32%] md:top-[27%] xl:left-[2%] lg:left-[10%] xl:left-[3%] md:left-[4%] xl:w-[20%] lg:w-[10%] md:w-[24%] w-[30%] bg-black"></img>
           <span className="absolute 2xl:top-[79%] xl:top-[60%] lg:top-[80%] md:top-[65%] 2xl:left-[2.33%] xl:left-[3%] lg:left-[3.5%] md:left-[1.5%] text-white font-medium text-[20px] 2xl:text-[24px]  md:text-[16px] text-[8px] top-[79%] left-[0]">Email:gensec.sntc@iitbhu.ac.in</span>
           
           <div className=" absolute 2xl:top-[27%] lg:top-[20%] md:top-[28%] 2xl:left-[28.5%] lg:left-[30%] md:left-[33%] 2xl:h-[61%] lg:h-[75%] md:h-[49%] bg-white xl:w-[0.15%] lg:w-[0.21%] md:w-[0.3%] w-[0.45%] top-[35%] left-[34%] h-[52%]"></div>
            <img src="/Footer/footerlogo.svg" className="absolute xl:top-[29%] lg:top-[10%] md:top-[26%] xl:left-[35%] lg:left-[37%] md:left-[33%]  xl:w-[28%] lg:w-[26%] md:w-[40%] w-[40%] top-[36%] left-[34.4%]"></img>
            <span className="absolute 2xl:top-[52%] xl:top-[43%] lg:top-[52%] md:top-[44%] 2xl:left-[38%] xl:left-[35.6%] lg:left-[42%] md:left-[36%] text-white font-bold lg:text-[20px] md:text-[34px] text-[16px] top-[54%] left-[37.4%]">Connect with us</span>
            <img src="/Footer/linkedin.svg" onClick={() => window.open("https://www.linkedin.com/company/science-and-technology-council-iit-bhu-varanasi/?originalSubdomain=in")} className="absolute hover:cursor-pointer 2xl:top-[66%] xl:top-[51.2%] lg:top-[78%] md:top-[57%] xl:left-[39%] lg:left-[42%] md:left-[39%] xl:w-[4%] lg:w-[2%] top-[65%] left-[38%] w-[7%]"></img>
            <img src="/Footer/instagram.svg" onClick={() => window.open("https://www.instagram.com/sntc.iitbhu/?hl=en")} className="absolute hover:cursor-pointer 2xl:top-[66%] xl:top-[51.2%] lg:top-[78%] md:top-[57%] xl:left-[44%] lg:left-[46%]  md:left-[46%] xl:w-[4%] lg:w-[2%] top-[65%] left-[46%] w-[7%]"></img>
            <img src="/Footer/facebook.svg" onClick={() => window.open("https://www.facebook.com/sntc.iitbhu/")} className="absolute hover:cursor-pointer 2xl:top-[66%] xl:top-[51.2%] lg:top-[78%] md:top-[57%] xl:left-[49%] lg:left-[50%] md:left-[53%] xl:w-[4%] lg:w-[2%] top-[65%] left-[54%] w-[7%]"></img>
            <img src="/Footer/youtube.svg" onClick={() => window.open("https://www.youtube.com/@scienceandtechnologycounci2602")} className="absolute hover:cursor-pointer 2xl:top-[63%] xl:top-[49.5%] lg:top-[75.2%] md:top-[55%] xl:left-[54%] lg:left-[53.9%] md:left-[60.2%] xl:w-[5.5%] lg:w-[2.7%] top-[63.4%] left-[62%] w-[8%]"></img>
            <div className=" absolute 2xl:top-[27%] lg:top-[20%] md:top-[28%] 2xl:left-[66%] lg:left-[68%] md:left-[72%] 2xl:h-[61%] lg:h-[75%] md:h-[49%] bg-white xl:w-[0.15%] lg:w-[0.28%] md:w-[0.3%] w-[0.3%] top-[35%] right-[28%] h-[52%]"></div>
            <img src="/Footer/newsletter.svg" className="absolute 2xl:top-[19%] lg:top-[18%] md:top-[28%] xl:right-[6.5%] lg:right-[10%] md:right-[3%] xl:w-[20%] lg:w-[10.5%] md:w-[23%] w-[21%] top-[40%] right-[3%]"></img>
            <span className="absolute 2xl:top-[63%] xl:top-[55%] lg:top-[68%] md:top-[59%] 2xl:right-[2%] xl:right-[3%] lg:right-[5.5%] md:right-[0.1%] text-white font-semibold 2xl:text-[34px] lg:text-[15px] md:text-[16px] text-[6.5px] right-1 top-[70%]">Subscribe to our Newsletter!</span>
            <button className=" absolute 2xl:top-[75%] xl:top-[62%] lg:top-[83%] md:top-[67%] 2xl:right-[4%] xl:right-[7.5%] lg:right-[5.4%] md:right-[2%] 2xl:w-[24%] bg-black border-2 rounded-lg  p-1 lg:p-1.3 md:p-1 md:w-[21%]  font-medium text-white opacity-100 top-[76%] right-1 w-[26%] text-[8px] 2xl:text-[20px]">Enter your email</button>
        </div>
    )
}
export default Footer;