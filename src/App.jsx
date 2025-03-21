import OurWork from "./OurWork";
import Servicecard from "./Servicecard";
import ThereeThingsInMind from "./ThereeThingsInMind";
import TitleBeforeBespoke from "./TitleBeforeBespoke";

function App() {
  return (
    <div>
      <div className="container max-w-[88rem] mx-auto">
        <button className=" fixed bottom-6 right-6 cursor-pointer bg-black py-3 px-5 text-[16px] font-regular rounded-full flex gap-2 text-white items-center group transition-all duration-300 hover:bg-[#FF34F3]">
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
            <img src="arrow-icon.svg" className="w-32"></img>
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
        <OurWork />
      </div>
    </div>
  );
}

export default App;
