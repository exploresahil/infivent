"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MouseParallax } from "react-just-parallax";

import heroimg from "@/public/png/dashboard-main.png";

import { getHero } from "@/sanity/sanity-utils";
import { heroType } from "@/types/hero-type";

const Hero = () => {
  const router = useRouter();
  const [heros, setHeros] = useState<heroType[]>([]);

  useEffect(() => {
    async function fetchHeros() {
      const heros = await getHero();
      setHeros(heros);
    }

    fetchHeros();
  }, []);

  return (
    <div className="hero-section">
      <MouseParallax enableOnTouchDevice isAbsolutelyPositioned strength={0.1}>
        <div className="bg-container" />
      </MouseParallax>

      {heros.map((hero) => (
        <div key={hero._id} className="hero-text">
          <h1>{hero.heading}</h1>
          <p>{hero.description}</p>
          <button type="button" onClick={() => router.push(hero.url)}>
            Get Started
          </button>
        </div>
      ))}

      <div className="heroimg-cont">
        <div className="hero-img">
          <Image sizes="100%" fill alt="" src={heroimg} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
