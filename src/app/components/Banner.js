"use client";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-200 to-transparent bottom-0 z-20" />
      <Carousel />
    </div>
  );
};

export default Banner;
