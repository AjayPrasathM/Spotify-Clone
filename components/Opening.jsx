import React from "react";
import background from "../assets/Music.mp4";

const Opening = () => {
  return (
    <div className="h-screen bg-[#121212] flex items-center justify-center]">
      <video
        className=" flex h-screen w-[100%] object-cover mix-blend-screen"
        src={background}
        preload="auto"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default Opening;
