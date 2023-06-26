"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import carousel1 from "../../../public/static/carousel1.jpg";
import carousel2 from "../../../public/static/carousel2.jpg";
import carousel3 from "../../../public/static/carousel3.jpg";
import carousel4 from "../../../public/static/carousel4.jpg";
import Image from "next/image";

function Carousel() {
  const slides = [carousel1, carousel2, carousel3, carousel4];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="hidden lg:block h-[640px] w-full m-auto relative group">
      <Image
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        src={slides[currentIndex]}
        fill
      />

      <div className="hidden group-hover:block absolute top-[30%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      <div className="hidden group-hover:block absolute top-[30%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
