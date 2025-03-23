import React from "react";

function OurResult() {
  return (
    <div className="container max-w-[80rem] mx-auto pt-48">
      <div className="flex flex-col">
        <h1 className="text-white leading-none text-[10rem]">OUR</h1>
        <h1 className="text-white leading-none text-[10rem] ml-48">RESULTS</h1>
      </div>
      <div className="mt-25 w-full rounded-tr-[11rem] bg-[url('https://kota-content.b-cdn.net/app/uploads/2024/05/Statistics-bg-black-2000x1089.jpeg')] bg-cover bg-no-repeat border border-[#504F4F] rounded-2xl  p-16 flex flex-row  gap-10">
        <div className="flex flex-col text-white w-1/2  justify-between">
          <img
            src="https://kota-content.b-cdn.net/app/uploads/2024/05/pison-logo.svg"
            alt="Pison Logo"
            className="w-25"
          />
          <div>
            <h1 className="text-9xl font-normal bg-gradient-to-r from-[#8447D6] to-[#AC77F2] text-transparent bg-clip-text inline-block">
              67.6%
            </h1>

            <p className="mt-2 w-4/5 text-3xl">
              rise in engaged sessions per user after 1 month
            </p>
          </div>
          <button className="mt-10 w-fit cursor-pointer border-2 border-white bg-black py-3 px-6 text-[18px] rounded-full flex items-center gap-3 text-white transition-all duration-300 group ">
            Find out more
            <img
              src="arrow-button-icon.svg"
              alt="Arrow Icon"
              className="w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:scale-110"
            />
          </button>
        </div>
        <img
          className="w-1/2 h-auto"
          src="https://kota-content.b-cdn.net/app/uploads/2024/05/pison-stats.png"
          alt="Pison Stats"
        />
      </div>
    </div>
  );
}

export default OurResult;
