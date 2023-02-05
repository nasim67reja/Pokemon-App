import React, { useState, useEffect } from "react";

// export interface SliderProps {
//   slides: { id: string; image: string; text: string }[];
// }

const VerticalSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //   console.log(slides.length);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % 3);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const slider1 = 100 * (((2 * currentIndex) % 3) - 1);

  const slider2 = currentIndex === 1 ? -100 : currentIndex === 2 ? 100 : 0;

  const slider3 = (1 - currentIndex) * 100;
  console.log(currentIndex, slider2);

  return (
    <div className=" relative h-full overflow-hidden  ">
      <img
        src="/assets/Left.png"
        alt=""
        // className="absolute top-0 left-0"
        className={`${
          slider1 === 100 ? "opacity-0" : "opacity-100"
        } absolute top-0 left-0`}
        style={{
          transform: `translateY(${slider1}%)`,
          transition: "transform 6s ease-in",
        }}
      />
      <img
        src="/assets/Left.png"
        alt=""
        className={`${
          slider2 === 100 ? "opacity-0" : "opacity-100"
        } absolute top-0 left-0`}
        // className={`${slider2 === 0 ? "opacity-100" : "opacity-0"}`}
        style={{
          transform: `translateY(${slider2}%)`,
          transition: "transform 6s ease-in",
        }}
      />
      <img
        src="/assets/Left.png"
        alt=""
        className={`${
          slider3 === 100 ? "opacity-0" : "opacity-100"
        } absolute top-0 left-0`}
        // className={`${slider3 === 0 ? "opacity-100" : "opacity-0"}`}
        style={{
          transform: `translateY(${slider3}%)`,
          transition: "transform 6s ease-in",
        }}
      />

      {/* {slides.map((slide, index) => (
        <div
          key={slide.id}
          className="slide "
          style={{
            transform: `translateY(${index === currentIndex ? 0 : -100}%)`,
            transition: "transform 4s ease-in-out",
          }}
        >
          <img src={slide.image} alt={slide.text} />
        </div>
      ))} */}
    </div>
  );
};

export default VerticalSlider;
