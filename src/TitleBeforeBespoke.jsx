import React from "react";

function TitleBeforeBespoke() {
  return (
    <div className="flex items-center flex-col text-center h-lvh  justify-center">
      <h1 className="text-[6rem] leading-tight">We develop bespoke</h1>
      <h1 className="text-[6rem] leading-tight relative inline-block">
        websites with{" "}
        <span className="relative inline-block">
          three
          <svg
            className="absolute  bottom-[-5px]"
            height="40"
            width="350"
            viewBox="0 0 370 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 30 Q90 20, 270 20"
              stroke="black"
              strokeWidth="5"
              fill="transparent"
            />
          </svg>
        </span>
      </h1>
      <h1 className="text-[6rem] leading-tight relative inline-block">
        <span className="relative inline-block">
          things in mind
          <svg
            className="absolute left-1/2 -translate-x-1/2 bottom-[-5px]"
            height="40"
            viewBox="0 0 700 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 38 Q250 20, 700 15"
              stroke="black"
              strokeWidth="5"
              strokeLinecap="round"
              fill="transparent"
            />
          </svg>
        </span>
      </h1>
    </div>
  );
}

export default TitleBeforeBespoke;
