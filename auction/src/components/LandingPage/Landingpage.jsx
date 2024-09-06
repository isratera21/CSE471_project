import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Video from "../assets/Free Video Background Loop_ Auction Hammer.mp4";
import Image from "../assets/Black_and_Red_Modern_Automotive_Car_Logo__2_-removebg-preview.png";
import Audio from "../assets/Most Happy Background Music For Videos.mp3";
const Landingpage = () => {
  useEffect(() => {
    document.addEventListener("click", (event) => {
      document.getElementById("Audio")?.play();
    });
  }, []);
  return (
    <div className="relative h-screen">
      <audio id="Audio">
        <source src={Audio} type="audio/mp3" />
      </audio>
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={Video} 
        ></video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      {/* Text in the Middle */}
      <div className="flex flex-col gap-4 absolute inset-0 items-center justify-center">

        <Link to="/customer">
          <button className="rounded-md shadow-sm bg-gray-800 hover:bg-gray-900">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landingpage;
