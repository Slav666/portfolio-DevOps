import React, { FC } from "react";
import { infoData } from "../constants";
import CircleImage from "../components/custom-image/CircleImage";
import { DisplayArea } from "../components/composite-components/composite-components";

const About: FC = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p>{infoData}</p>
        </div>
        <DisplayArea>
          <CircleImage alt="hero" src="/slav.jpg" />
        </DisplayArea>
      </div>
    </section>
  );
};

export default About;
