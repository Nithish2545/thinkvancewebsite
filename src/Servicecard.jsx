import React from "react";

function Servicecard() {
  return (
    <div className="bg-white rounded-4xl p-10 gap-20 flex flex-row justify-between mb-20">
      <div className="flex flex-col justify-center">
        <h1 className="text-8xl mb-10">Web design & development</h1>
        <div className=" flex flex-col gap-6 ">
          <div className="flex flex-wrap gap-2.5">
            <button className="cursor-pointer text-black border-2 hover border-gray-200 rounded-full px-4 py-1.5 transition-all duration-300 hover:text-white hover:bg-black">
              Creative Web Design
            </button>
            <button className="cursor-pointer text-black border-2 hover border-gray-200 rounded-full px-4 py-1.5 transition-all duration-300 hover:text-white hover:bg-black">
              Web development
            </button>
            <button className="cursor-pointer text-black border-2 hover border-gray-200 rounded-full px-4 py-1.5 transition-all duration-300 hover:text-white hover:bg-black">
              Copywriting
            </button>
            <button className="cursor-pointer text-black border-2 hover border-gray-200 rounded-full px-4 py-1.5 transition-all duration-300 hover:text-white hover:bg-black">
              E-Commerce
            </button>
            <button className="cursor-pointer text-black border-2 hover border-gray-200 rounded-full px-4 py-1.5 transition-all duration-300 hover:text-white hover:bg-black">
              WordPress
            </button>
          </div>
          <p className="text-[18px]">
            Crafting digital experiences where beauty meets ROI, turning heads
            and unlocking revenue potential with every click.
          </p>
          <button className="w-fit cursor-pointer border-2 border-black bg-white py-2 px-6 text-[18px] rounded-full flex gap-3 text-black items-center transition-all duration-300 group">
            Find out more
            <img
              src="arrow-white-icon.svg"
              alt=""
              className="w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:scale-110"
            />
          </button>
        </div>
      </div>
      <div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="rounded-tr-[15rem]"
          src="https://kota-content.b-cdn.net/app/uploads/2024/02/homepage.mp4"
        ></video>
      </div>
    </div>
  );
}

export default Servicecard;
