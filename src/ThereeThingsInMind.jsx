import React from "react";
import InmindCard from "./InmindCard";

function ThreeThingsInMind() {
  return (
    <>
      <InmindCard
        count={"01/"}
        title={"Beauty"}
        image={""}
        discription={
          "Developing stunning one-of-a-kind digital design that catches people’s eyes and brings your brand to life online."
        }
      />
      <InmindCard
        count={"02/"}
        title={"Thought"}
        image={""}
        discription={
          "As a web design agency, we love to deliver meaningful and intuitive user experiences that build trust with your target audience."
        }
      />
      <InmindCard
        count={"03/"}
        title={"Impact"}
        image={""}
        discription={
          "Designing tailor made solutions that resonate with your customers and drives them to act."
        }
      />
    </>
  );
}

export default ThreeThingsInMind;
