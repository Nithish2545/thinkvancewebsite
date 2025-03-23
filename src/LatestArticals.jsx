import React from "react";
import ArticalCard from "./ArticalCard";

function LatestArticals() {
  const ArticalCardDataset = [
    {
      imageURL:
        "https://kota-content.b-cdn.net/app/uploads/2025/01/brand-pulse-audit-768x432.png",
      title: "Expertise",
      discription: "Time for a rebrand? Start with our Brand Pulse Audit tool",
    },
    {
      imageURL:
        "https://kota-content.b-cdn.net/app/uploads/2024/03/not-boring-1400x788.png",
      title: "Inspiration",
      discription: "Branding inspiration: brand design trends for 2025",
    },
    {
      imageURL:
        "https://kota-content.b-cdn.net/app/uploads/2024/06/clutch-top-branding-company-2024-1.png",
      title: "Culture, Our work",
      discription:
        "Clutch names KOTA a 2024 Global Winner, Clutch Champion & Top Branding Company",
    },
    {
      imageURL: "https://kota-content.b-cdn.net/app/uploads/2023/10/post-2.jpg",
      title: "Expertise",
      discription: "How long does it take to design and build a website?",
    },
    {
      imageURL:
        "https://kota-content.b-cdn.net/app/uploads/2024/12/design-trends-2025-768x432.png",
      title: "Inspiration",
      discription: "5 cool brands in characteristically boring industries",
    },
    {
      imageURL:
        "https://kota-content.b-cdn.net/app/uploads/2024/12/Great-place-to-work-KOTA-500x281.png",
      title: "Culture",
      discription: "KOTA earns 2025 Great Place to Work Certification™ 🎉",
    },
  ];
  return (
    <div className="container pt-48 max-w-[80rem] mx-auto flex  flex-col justify-between">
      <div className="flex  justify-between items-center">
        <div>
          <h1 className="text-white text-8xl font-normal">Latest articles</h1>
        </div>
        <button className="w-fit h-fit cursor-pointer border-2 border-white bg-black py-3 px-6 text-[16px] rounded-full flex items-center gap-3 text-white transition-all duration-300 group">
          View our blog
          <img
            src="arrow-button-icon.svg"
            alt="Arrow Icon"
            className="w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:scale-110"
          />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-10">
        {ArticalCardDataset.map((d) => (
          <ArticalCard
            imageURL={d.imageURL}
            title={d.title}
            discription={d.discription}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestArticals;
