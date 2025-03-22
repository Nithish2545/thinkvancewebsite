import React from "react";

function WorkCard({ title, image, year, discription }) {
  return (
    <div className="border-[#504F4F] border-[1px] rounded-2xl relative overflow-hidden group">
      <div className="flex justify-between p-5 z-10">
        <div className="flex items-center gap-2">
          <img
            className="w-5 rotate-45"
            src="arrow-button-icon.svg"
            alt="Arrow button"
          />
          <p className="text-white font-semibold text-lg">{title}</p>
        </div>
        <p className="text-white font-semibold text-lg">{year}</p>
      </div>
      <div className="relative">
        <img
          className="rounded-2xl w-full h-auto rounded-b-2xl object-cover transition duration-500 ease-in-out transform hover:scale-105"
          src={image}
          alt="Floan image"
        />
        {/* Darker Background Overlay */}
        <div className="absolute inset-0 before:absolute before:inset-0 before:bg-black before:opacity-0 group-hover:before:opacity-80 before:transition-opacity before:duration-300 before:ease-in-out"></div>
        {/* Text Fully Visible on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <p className="text-white font-normal leading-relaxed text-[1.5rem] w-[88%] text-start px-6 drop-shadow-lg">
            {discription}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
