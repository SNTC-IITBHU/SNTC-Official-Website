import Image from "next/image";
import Temple from "../public/Footer/temple.svg";
import Footerlogo from "../public/Footer/footerlogo.svg";
import Linkedin from "../public/Footer/linkedin.svg";
import Instagram from "../public/Footer/instagram.svg";
import Facebook from "../public/Footer/facebook.svg";
import Youtube from "../public/Footer/youtube.svg";
import Newsletter from "../public/Footer/newsletter.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="-mb-0.5 w-full"
        viewBox="0 0 1367.743 181.155"
      >
        <path
          className="fill-current text-gray-100 dark:text-gray-800"
          id="wave"
          data-name="wave"
          d="M0,0S166.91-56.211,405.877-49.5,715.838,14.48,955.869,26.854,1366,0,1366,0V115H0Z"
          transform="translate(1.743 66.155)"
        ></path>
      </svg>
      <div className="bg-gradient-to-b from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent pt-1">
        <div className="container m-auto space-y-8 px-6 text-gray-600 dark:text-gray-400 md:px-12 lg:px-20">
          <div className="grid grid-cols-8 gap-6 md:gap-0">
            <div className="col-span-8 border-r border-gray-100 dark:border-gray-800 md:col-span-2 lg:col-span-3">
              <div className="sm:flex items-center justify-between gap-6 border-b border-white dark:border-gray-800 py-6 md:block md:space-y-6 md:border-none md:py-0">
                <Image
                  src={Footerlogo}
                  alt="logo tailus"
                  className="dark:brightness-200 dark:grayscale"
                />
                <div className="flex gap-6 justify-center sm:justify-start sm:ml-10">
                  <Image
                    src={Linkedin}
                    alt="linkedin"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/science-and-technology-council-iit-bhu-varanasi/?originalSubdomain=in"
                      )
                    }
                    className="hover:cursor-pointer h-8 w-8 transition-transform transform-gpu hover:scale-110"
                  />
                  <Image
                    src={Instagram}
                    alt="instagram"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/sntc.iitbhu/?hl=en"
                      )
                    }
                    className="hover:cursor-pointer h-8 w-8 transition-transform transform-gpu hover:scale-110"
                  />
                  <Image
                    src={Facebook}
                    alt="facebook"
                    onClick={() =>
                      window.open("https://www.facebook.com/sntc.iitbhu/")
                    }
                    className="hover:cursor-pointer h-8 w-8 transition-transform transform-gpu hover:scale-110"
                  />
                  <Image
                    src={Youtube}
                    alt="youtube"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/@scienceandtechnologycounci2602"
                      )
                    }
                    className="hover:cursor-pointer h-8 w-8 transition-transform transform-gpu hover:scale-110"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-8 md:col-span-6 lg:col-span-5">
              <div className="grid grid-cols-2 gap-32 pb-16 sm:grid-cols-2 md:pl-16">
                <div className="hidden md:block">
                  <Image src={Temple} alt="temple"></Image>
                </div>
                <div className="col-span-2 sm:col-span-2 md:col-span-1">
                  <h6 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                    Contact
                  </h6>
                  <ul className="mt-4 list-inside space-y-4">
                    {/* <li>
                      <a
                        href="tel:+243996660436"
                        className="transition hover:text-primary"
                      >
                        +243 996 660 436
                      </a>
                    </li> */}
                    <li>
                      <a href="mailto:gensec.sntc@iitbhu.ac.in" className="hover:text-white">
                        {" "}
                        Email: gensec.sntc@iitbhu.ac.in
                      </a>
                    </li>
                    <li>
                      <form action="">
                        <label
                          htmlFor="newsletter"
                          className="text-lg text-gray-700 dark:text-gray-200"
                        >
                          Subscribe to our newsletter
                        </label>
                        <div className="relative mt-4">
                          <input
                            type="email"
                            name="newsletter"
                            id="newsletter"
                            placeholder="Your email"
                            className="invalid:outline-none placeholder-gray-600 rounded-3xl w-full bg-gray-100 dark:bg-gray-900 px-4 py-3 ring-1 ring-gray-200 dark:ring-gray-700 invalid:ring-red-400"
                          />
                          <button
                            type="submit"
                            title="Submit"
                            className="absolute right-0 w-max rounded-r-3xl bg-primary py-3 px-6 text-center transition bg-[#D12156] hover:bg-[#c92b5b]"
                          >
                            <span className="font-semibold text-gray-100">
                              Send
                            </span>
                          </button>
                        </div>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="flex justify-between border-t border-gray-100 dark:border-gray-800 py-4 pb-8 md:pl-16">
                <span>&copy; tailus 2003 - {currentYear} </span>
                <span>All rights reserved</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
