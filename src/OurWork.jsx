import React from "react";

function OurWork() {
  return (
    <div className=" container max-w-[80rem] mx-auto pt-48">
      <div className="flex flex-row justify-between items-end ">
        <h1 className="text-white leading-none text-[10rem]">OUR</h1>
        <div className="flex-col">
          <p className="text-white text-6xl w-[540px] mb-4">
            Making brands a damn site better.
          </p>
          <p className="text-white w-[600px]">
            Let’s face it, first impressions matter. Your website’s an
            opportunity to wow your audience, so why choose bad design? Brands
            win over fans when they’re brave enough to go beyond their creative
            comfort zone.
          </p>
        </div>
      </div>
      <h1 className="text-white leading-none text-[10rem] ml-20">WORK</h1>
      <div className="mt-12">
        <div className="border-[#504F4F] border-[1px] rounded-3xl relative overflow-hidden group">
          <div className="flex justify-between p-5 z-10">
            <div className="flex items-center gap-2">
              <img
                className="w-5"
                src="arrow-button-icon.svg"
                alt="Arrow button"
              />
              <p className="text-white font-semibold text-lg">Floan</p>
            </div>
            <p className="text-white font-semibold text-lg">2023</p>
          </div>
          <div className="relative">
            <img
              className="rounded-3xl w-full h-auto rounded-b-3xl object-cover transition duration-500 ease-in-out transform hover:scale-105"
              src="https://kota-content.b-cdn.net/app/uploads/2024/02/08-5-2048x1152.jpg"
              alt="Floan image"
            />
            {/* Darker Background Overlay */}
            <div className="absolute inset-0 before:absolute before:inset-0 before:bg-black before:opacity-0 group-hover:before:opacity-80 before:transition-opacity before:duration-300 before:ease-in-out"></div>

            {/* Text Fully Visible on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <p className="text-white font-normal leading-snug text-[3.2rem] w-[88%] text-start px-6 drop-shadow-lg">
                We created the visual and verbal brand for the new flight loan
                company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurWork;
