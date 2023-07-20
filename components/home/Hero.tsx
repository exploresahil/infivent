import Image from "next/image";
import React from "react";
import bg from "@/public/png/hero-bg.png"
import heroimg from "@/public/png/Mask group.png"

const Hero = () => {
  return <div className="hero-section">
    <div className="bg-container">
      <Image fill alt="" src={bg} />
    </div>
    <div className="hero-text">
      <h1>
        Streamline, connect & elevate b2b events & expos!
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in mollis nunc sed id semper risus in.
      </p>
      <button>Get Started</button>
    </div>
    <div className="heroimg-cont">
      <div className="hero-img">
        <Image fill alt="" src={heroimg} />
      </div>


    </div>


  </div>;

};

export default Hero;
