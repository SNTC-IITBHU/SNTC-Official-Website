import { useState } from "react";

const Contactus=()=> {
    const [show, setShow] = useState(false);
    return (
       
            <div className="w-full flex items-center justify-center my-12 relative top-[-20vh]">
                <div className=" bg-[#110414] border border-white shadow rounded py-12 lg:px-28 px-8">
                <div className="text-center md:text-8xl text-5xl text-[#8C50A6] font-bold relative top-[5%]">
          Contact Us
        </div>
                 
                    <div className="md:flex items-center mt-12">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-white">Name</label>
                            <input tabIndex={0} arial-label="Please input name" type="name" className="text-base leading-none text-black p-3 focus:oultine-none focus:border-[#8C50A6] mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input  name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-white">Email Address</label>
                            <input tabIndex={0} arial-label="Please input email address" type="name" className="text-base leading-none text-black p-3 focus:oultine-none focus:border-[#8C50A6] mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input email address" />
                        </div>
                    </div>
                    <div className="md:flex items-center mt-8">
                        <div className="md:w-72 flex flex-col">
                            <label className="text-base font-semibold leading-none text-white">Company name</label>
                            <input tabIndex={0} role="input" arial-label="Please input company name" type="name" className="text-base leading-none text-black p-3 focus:oultine-none focus:border-[#8C50A6] mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 " placeholder="Please input company name" />
                        </div>
                        <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                            <label className="text-base font-semibold leading-none text-white">Country</label>
                            <input tabIndex={0} arial-label="Please input country name" type="name" className="text-base leading-none text-black p-3 focus:oultine-none focus:border-[#8C50A6] mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100" placeholder="Please input country name" />
                        </div>
                    </div>
                    <div>
                        <div className="w-full flex flex-col mt-8">
                            <label className="text-base font-semibold leading-none text-white">Message</label>
                            <textarea tabIndex={0} aria-label="leave a message" role="textbox" type="name" className="h-36 text-base leading-none text-black p-3 focus:oultine-none focus:border-[#8C50A6] mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none" defaultValue={""} />
                        </div>
                    </div>
                    <p className="text-xs leading-3 text-gray-400 mt-4">By clicking submit you agree to our terms of service, privacy policy and how we use data as stated</p>
                    <div className="flex items-center justify-center w-full">
                        <button className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-[#D12156] rounded hover:bg-[#c92b5b] focus:ring-2 focus:ring-offset-2 focus:ring-[#8C50A6] focus:outline-none">SUBMIT</button>
                    </div>
                </div>
            </div>
        
    );
}

export default Contactus;
