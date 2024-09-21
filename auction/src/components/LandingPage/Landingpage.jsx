import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Video from "../assets/Free Video Background Loop_ Auction Hammer.mp4";
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
          src={Video} // Replace with your video file path
        ></video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      {/* Text in the Middle */}
      <div className="flex flex-col gap-2 absolute inset-0 items-center justify-center">

      </div>
    </div>
  );
};

export default Landingpage;
