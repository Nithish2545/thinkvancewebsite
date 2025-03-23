import React from "react";
import WorkCard from "./WorkCard";

function OurWork({ targetRef, targetRef1 }) {
  return (
    <div className=" container max-w-[80rem] mx-auto pt-48">
      <div className="flex flex-row justify-between items-end ">
        <h1 className="text-white leading-none text-[10rem]">OUR</h1>
        <div className="flex-col">
          <p ref={targetRef} className="text-white text-6xl w-[540px] mb-4">
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
        <div className="border-[#504F4F] border-[1px] rounded-2xl relative overflow-hidden group">
          <div className="flex justify-between p-5 z-10">
            <div className="flex items-center gap-2">
              <img
                className="w-5 rotate-45"
                src="arrow-button-icon.svg"
                alt="Arrow button"
              />
              <p className="text-white font-semibold text-lg">Floan</p>
            </div>
            <p className="text-white font-semibold text-lg">2023</p>
          </div>
          <div className="relative">
            <img
              className="rounded-2xl w-full h-auto rounded-b-3xl object-cover transition duration-500 ease-in-out transform hover:scale-105"
              src="https://kota-content.b-cdn.net/app/uploads/2024/02/08-5-2048x1152.jpg"
              alt="Floan image"
            />
            {/* Darker Background Overlay */}
            <div className="absolute inset-0 before:absolute before:inset-0 before:bg-black before:opacity-0 group-hover:before:opacity-80 before:transition-opacity before:duration-300 before:ease-in-out"></div>
            {/* Text Fully Visible on Hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <p
                ref={targetRef1}
                className="text-white font-normal leading-snug text-[3.2rem] w-[88%] text-start px-6 drop-shadow-lg"
              >
                We created the visual and verbal brand for the new flight loan
                company.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-8">
          <WorkCard
            title={"Florence"}
            image={
              "https://kota-content.b-cdn.net/app/uploads/2024/05/hero-768x432.png"
            }
            year={2021}
            discription={
              "Inside Florence's stunning brand and digital transformation."
            }
          />
          <WorkCard
            title={"Tangerine"}
            image={
              "https://kota-content.b-cdn.net/app/uploads/2024/02/featured-4-1400x788.jpg"
            }
            year={2022}
            discription={
              "We took on the challenge of creating the new website for tangerine, a global pioneer in design."
            }
          />
          <WorkCard
            title={"Wogan Coffee"}
            image={
              "https://kota-content.b-cdn.net/app/uploads/2023/10/wogan-featured-2-1400x788.jpg"
            }
            year={2023}
            discription={
              "We completely transformed the image of Bristol's finest coffee company."
            }
          />
          <WorkCard
            title={"PixelArtworks"}
            image={
              "https://kota-content.b-cdn.net/app/uploads/2024/02/featured-4-1400x788.jpg"
            }
            year={2024}
            discription={
              "We took on the challenge of creating the new website for tangerine, a global pioneer in design."
            }
          />
        </div>
        <button className="ml-auto mr-auto mt-10 w-fit cursor-pointer border-2 border-white bg-black  py-2 px-6 text-[18px] rounded-full flex gap-3 text-white items-center transition-all duration-300 group">
          Find out more
          <img
            src="arrow-button-icon.svg"
            alt=""
            className="w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:scale-110"
          />
        </button>
      </div>
    </div>
  );
}

export default OurWork;
