import React from "react";

function ArticalCard({ imageURL, title, discription }) {
  return (
    <div className="cursor-pointer">
      <img className="w-full h-56 rounded-tr-[5rem]" src={imageURL} alt="" />
      <div className="bg-white min-h-54 p-6 flex flex-col  gap-3">
        <h1 className="text-black font-normal uppercase">{title}</h1>
        <p className="text-black text-[1.3rem] leading-snug font-[400]">
          {discription}
        </p>
      </div>
    </div>
  );
}

export default ArticalCard;
