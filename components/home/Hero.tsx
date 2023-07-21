"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import bg from "@/public/png/hero-bg.png";
import heroimg from "@/public/png/Mask group.png";

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
      <div className="bg-container">
        <Image sizes="100%" fill alt="" src={bg} />
      </div>

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