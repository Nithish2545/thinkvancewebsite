import { useEffect, useRef, useState } from "react";
import Footer from "./Footer";
import LatestArticals from "./LatestArticals";
import OurPartners from "./OurPartners";
import OurResult from "./OurResult";
import OurWork from "./OurWork";
import Servicecard from "./Servicecard";
import ThereeThingsInMind from "./ThereeThingsInMind";
import TitleBeforeBespoke from "./TitleBeforeBespoke";

function App() {
  const targetRef = useRef(null);
  const targetRef1 = useRef(null);
  const targetRef2 = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          myFunction(); // Call your function when in view
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  const myFunction = () => {
    console.log("Element is in view!");
    // Add any other logic you want to execute
  };

  return (
    <div>
      <div className="container max-w-[88rem] mx-auto">
        <button
          className={`fixed bottom-6 z-20 right-6 cursor-pointer py-3 px-5 text-[16px] font-regular rounded-full 
        flex gap-2 text-white items-center group transition-all duration-300 hover:bg-[#FF34F3]`}
          style={{
            backgroundColor: isVisible ? "white" : "black",
            color: isVisible ? "black" : "white",
          }}
        >
          Start your project
          <img
            src="arrow-button-icon.svg"
            alt=""
            className="w-5 transition-transform duration-300 group-hover:translate-x-2"
          />
        </button>
        <div className="">
          <div className="flex flex-row justify-between items-end mb-18">
            <div>
              <h1 className="text-black font-[400] text-[10rem] leading-none">
                OUR
              </h1>
              <h1 className="text-black font-[400] text-[10rem] leading-none ml-48">
                SERVICES
              </h1>
            </div>
            <img src="finalArrow.svg" className="w-32"></img>
          </div>
          <Servicecard />
          <Servicecard />
          <Servicecard />
          <Servicecard />
          <TitleBeforeBespoke />
          <ThereeThingsInMind />
        </div>
      </div>
      <div className="bg-black">
        <OurWork targetRef={targetRef} targetRef1={targetRef1} />
        <OurResult />
        <OurPartners />
        <LatestArticals />
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
}

export default App;
