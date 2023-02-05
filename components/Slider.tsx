import React, { useState, useEffect } from "react";

let time = 0;

const VerticalSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % 3);
      time = 8000;
    }, time);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const slider1 = 100 * (((2 * currentIndex) % 3) - 1);

  const slider2 = currentIndex === 1 ? -100 : currentIndex === 2 ? 100 : 0;

  const slider3 = (1 - currentIndex) * 100;

  return (
    <div className=" relative h-full overflow-hidden  ">
      <img
        src="/assets/Left.png"
        alt=""
        className={`${
          slider1 === 100 ? "opacity-0" : "opacity-100"
        } absolute top-0 left-0`}
        style={{
          transform: `translateY(${slider1}%)`,
          transition: "transform 8s ease-in",
        }}
      />
      <img
        src="/assets/Left.png"
        alt=""
        className={`${
          slider2 === 100 ? "opacity-0" : "opacity-100"
        } absolute top-0 left-0`}
        style={{
          transform: `translateY(${slider2}%)`,
          transition: "transform 8s ease-in",
        }}
      />
      <img
        src="/assets/Left.png"
        alt=""
        className={`${
          slider3 === 100 ? "opacity-0" : "opacity-100"
        } absolute top-0 left-0`}
        style={{
          transform: `translateY(${slider3}%)`,
          transition: "transform 8s ease-in",
        }}
      />
    </div>
  );
};

export default VerticalSlider;
