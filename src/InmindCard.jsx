import React from "react";

function InmindCard({ count, title, discription }) {
  return (
    <div className="group cursor-pointer mt-14">
      <div className="flex justify-between items-end">
        <div>
          <p className="font-medium text-2xl mb-2 text-[#C4C4C4] transition-all duration-500 group-hover:text-black">
            {count}
          </p>
          <h1 className="text-8xl leading-none -ml-1.5 pl-0 text-[#C4C4C4] transition-all duration-500 group-hover:text-black">
            {title}
          </h1>
        </div>
        <p className="flex text-2xl w-[400px] font-normal opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
          {discription}
        </p>
      </div>
      <div className="mt-14 h-[2.5px] w-full bg-[#C4C4C4] relative overflow-hidden">
        <div className="absolute inset-0 bg-black w-0 h-full transition-all duration-700 ease-in-out group-hover:w-full"></div>
      </div>
    </div>
  );
}

export default InmindCard;
