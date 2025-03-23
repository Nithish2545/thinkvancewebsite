import React from "react";

function Footer() {
  return (
    <div className="pt-30 container max-w-[80rem] mx-auto pb-30">
      <div className="flex justify-between">
        <div className="w-20 h-20 bg-white"></div>
        <p className="text-white text-8xl leading-none">hello@kota.co.uk</p>
      </div>
      <div className="flex flex-row justify-between mt-20">
        <div className="flex gap-10">
          <div className="flex items-center gap-1 group cursor-pointer">
            <p className="text-white text-lg font-normal transition-all duration-300">
              LinkedIn
            </p>
            <img
              className="w-4 transition-transform duration-300 transform rotate-[325deg] 
      group-hover:translate-x-0.5 group-hover:-translate-y-0.5 "
              src="footerarrow.svg"
              alt="Arrow"
            />
          </div>
          <div className="flex items-center gap-1 group cursor-pointer">
            <p className="text-white text-lg font-normal transition-all duration-300">
              Facebook
            </p>
            <img
              className="w-4 transition-transform duration-300 transform rotate-[325deg] 
      group-hover:translate-x-0.5 group-hover:-translate-y-0.5 "
              src="footerarrow.svg"
              alt="Arrow"
            />
          </div>
          <div className="flex items-center gap-1 group cursor-pointer">
            <p className="text-white text-lg font-normal transition-all duration-300">
              Instagram
            </p>
            <img
              className="w-4 transition-transform duration-300 transform rotate-[325deg] 
      group-hover:translate-x-0.5 group-hover:-translate-y-0.5 "
              src="footerarrow.svg"
              alt="Arrow"
            />
          </div>
          <div className="flex items-center gap-1 group cursor-pointer">
            <p className="text-white text-lg font-normal transition-all duration-300">
              Bluesky
            </p>
            <img
              className="w-4 transition-transform duration-300 transform rotate-[325deg] 
      group-hover:translate-x-0.5 group-hover:-translate-y-0.5 "
              src="footerarrow.svg"
              alt="Arrow"
            />
          </div>
        </div>
        <div className="flex gap-12">
          <img
            className="w-auto h-8"
            src="https://kota-content.b-cdn.net/app/uploads/2024/06/DAN-1-500x167.png"
            alt=""
          />
          <img
            className="w-auto h-8"
            src="https://kota-content.b-cdn.net/app/uploads/2023/10/clutch.svg"
            alt=""
          />
          <img
            className="w-auto h-8"
            src="https://kota-content.b-cdn.net/app/uploads/2023/10/awwwards.svg"
            alt=""
          />
          <img
            className="w-20 h-8"
            src="https://kota-content.b-cdn.net/app/uploads/2023/10/cssda.svg"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-row justify-between mt-18 items-center">
        <div className="flex gap-8">
          <p className="cursor-pointer text-white text-lg font-normal transition-all duration-300">
            Contact
          </p>
          <p className="cursor-pointer text-white text-lg font-normal transition-all duration-300">
            FAQs
          </p>
          <p className="cursor-pointer text-white text-lg font-normal transition-all duration-300">
            Privacy Policy
          </p>
        </div>
        <div>
          <button
            className="bg-black border-2 border-white text-white text-lg px-5 py-2.5 rounded-full 
  hover:bg-white hover:text-black cursor-pointer 
  transition-all duration-300 ease-in-out 
  transform shadow-lg"
          >
            Sign up to our newsletter
          </button>
        </div>
      </div>
      <div className="flex justify-between pt-20">
        <div className="flex flex-wrap items-center gap-5">
          <p className="cursor-pointer text-white text-lg font-normal transition-all duration-300">
            Our sectors :
          </p>
          <div className="flex  gap-3">
            <button className="border-[1px] px-6 py-1.5 rounded-full border-[#504F4F] cursor-pointer text-white text-[16px] font-normal transition-all duration-300">
              Agencies
            </button>
            <button className="border-[1px] px-6 py-1.5 rounded-full border-[#504F4F] cursor-pointer text-white text-[16px] font-normal transition-all duration-300">
              SaaS and Tech
            </button>
            <button className="border-[1px] px-6 py-1.5 rounded-full border-[#504F4F] cursor-pointer text-white text-[16px] font-normal transition-all duration-300">
              B2B Transformation
            </button>
            <button className="border-[1px] px-6 py-1.5 rounded-full border-[#504F4F] cursor-pointer text-white text-[16px] font-normal transition-all duration-300">
              Healthcare
            </button>
            <button className="border-[1px] px-6 py-1.5 rounded-full border-[#504F4F] cursor-pointer text-white text-[16px] font-normal transition-all duration-300">
              Media & Entertainment
            </button>
          </div>
        </div>
        <button className="cursor-pointer text-white text-lg font-medium transition-all duration-300">
          © KOTA 2025
        </button>
      </div>
    </div>
  );
}

export default Footer;
