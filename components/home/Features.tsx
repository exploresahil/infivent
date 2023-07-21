import React from "react";
import { BsChatLeft } from "react-icons/bs";
import { LuPaintBucket, LuPlug } from "react-icons/lu";
import { MdLocationSearching } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";

function Features() {
  return (
    <div className="feature-section">
      <div className="fetaures-title">
        <h2>Powerful Features to Enhance Your Expo Experience</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid-container">
        <div className="card">
          <div className="icon-container">
            <BsChatLeft />
          </div>
          <h3>Real-time chat</h3>
          <p>
            Generated Lorem Ipsum Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Purus in mollis nunc sed id semper risus in.
          </p>
        </div>

        <div className="card">
          <div className="icon-container">
            <LuPaintBucket />
          </div>
          <h3>Real-time chat</h3>
          <p>
            Generated Lorem Ipsum Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Purus in mollis nunc sed id semper risus in.
          </p>
        </div>

        <div className="card">
          <div className="icon-container">
            <MdLocationSearching />
          </div>
          <h3>Real-time chat</h3>
          <p>
            Generated Lorem Ipsum Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Purus in mollis nunc sed id semper risus in.
          </p>
        </div>

        <div className="card">
          <div className="icon-container">
            <BsChatLeft />
          </div>
          <h3>Real-time chat</h3>
          <p>
            Generated Lorem Ipsum Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Purus in mollis nunc sed id semper risus in.
          </p>
        </div>

        <div className="card">
          <div className="icon-container">
            <AiOutlineMobile />
          </div>
          <h3>Real-time chat</h3>
          <p>
            Generated Lorem Ipsum Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Purus in mollis nunc sed id semper risus in.
          </p>
        </div>

        <div className="card">
          <div className="icon-container">
            <LuPlug />
          </div>
          <h3>Real-time chat</h3>
          <p>
            Generated Lorem Ipsum Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Purus in mollis nunc sed id semper risus in.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
