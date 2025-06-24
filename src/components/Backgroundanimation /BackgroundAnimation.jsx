import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/packaging-animation.json";

const BackgroundAnimation = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-[-1] opacity-30 pointer-events-none">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default BackgroundAnimation; 