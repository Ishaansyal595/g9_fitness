import React from "react";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section
      className="h-[100vh] lg:h-[912px] bg-hero bg-cover bg-top bg-no-repeat"
      id="home"
    >
      <div className="h-full bg-black/80">
        <div className="container mx-auto h-full">
          <HeroSlider />
        </div>
      </div>
    </section>
  );
};

export default Hero;
