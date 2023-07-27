"use client";

import { useEffect } from "react";

const Vision = () => {
  useEffect(() => {
    const visionContainer = document.getElementById("vision-container")!;
    const visionCursor = document.getElementById("vision-cursor")!;

    const missionContainer = document.getElementById("mission-container")!;
    const missionCursor = document.getElementById("mission-cursor")!;

    const handleMouseMove = (e) => {
      const { left: visionLeft, top: visionTop } =
        visionContainer.getBoundingClientRect();
      const { left: missionLeft, top: missionTop } =
        missionContainer.getBoundingClientRect();

      const visionX = e.clientX - visionLeft;
      const visionY = e.clientY - visionTop;

      const missionX = e.clientX - missionLeft;
      const missionY = e.clientY - missionTop;

      visionCursor.style.left = visionX + "px";
      visionCursor.style.top = visionY + "px";

      missionCursor.style.left = missionX + "px";
      missionCursor.style.top = missionY + "px";
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="vision-main">
      <div id="vision-container" className="vision-mission-container">
        <div className="cursor" id="vision-cursor" />
        <h3>
          <span>|</span> Vision
        </h3>
        <p>
          At Infivent, our vision is to be the leading global provider of
          innovative Event Management SaaS solutions that empower businesses to
          create exceptional and memorable event experiences. We strive to
          revolutionize the event management industry by delivering cutting-edge
          technology, seamless connectivity, and unparalleled customer
          experiences, making us the go-to platform for event organizers
          worldwide.
        </p>
      </div>
      <div id="mission-container" className="vision-mission-container">
        <div id="mission-cursor" className="cursor" />
        <h3>
          <div className="bg-container" />
          <span>|</span> Mission
        </h3>
        <p>
          Our mission at Infivent is to streamline, elevate, and connect B2B
          events and expos through our state-of-the-art Event Management SaaS
          platform. By leveraging advanced AI-driven technology, dynamic
          features, and real-time analytics, we aim to simplify event planning,
          enhance networking opportunities, and ensure successful outcomes for
          our clients. We are committed to continuous innovation, exceptional
          service, and delivering measurable value to our customers in every
          event they host.
        </p>
      </div>
    </div>
  );
};

export default Vision;
