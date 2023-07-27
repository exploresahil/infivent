"use client";

import Image from "next/image";

import image from "@/public/png/dashboard-main.png";
import { BsFillCaretDownFill } from "react-icons/bs";

import { getMainFeature } from "@/sanity/sanity-utils";
import { useEffect, useState } from "react";
import { mainFeaturesType } from "@/types/main-features-type";

function MainFearures() {
  const [mainFeatures, setmainFeatures] = useState<mainFeaturesType[]>([]);

  useEffect(() => {
    async function fetchmainFeatures() {
      const mainFeatures = await getMainFeature();
      setmainFeatures(mainFeatures);
    }

    fetchmainFeatures();
  }, []);

  return (
    <div id="main-features-container">
      <div className="heading">
        <h2>Our Main Features</h2>
        <BsFillCaretDownFill />
      </div>
      {mainFeatures.map((mainFeature) => (
        <div id={mainFeature._id} className="main-features">
          <div className="text-container">
            <h3>{mainFeature.title}</h3>
            <p>{mainFeature.description}</p>
          </div>
          <div className="img-container">
            <Image
              sizes="100%"
              fill
              alt={mainFeature.title}
              src={mainFeature.image.url}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainFearures;
