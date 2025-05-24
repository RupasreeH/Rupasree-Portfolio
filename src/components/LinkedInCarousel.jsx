import React, { useState, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const LinkedInCarousel = ({
  recommendations,
  autoSlide = true,
  interval = 5000,
}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % recommendations.length);
    }, interval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, interval, recommendations.length]);

  return (
    <div className="w-full overflow-hidden relative">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {recommendations.map((rec, idx) => (
          <div
            key={idx}
            className="w-full flex-shrink-0 flex justify-center items-center px-4"
          >
            <div className="max-w-2xl w-full bg-transparent shadow-xl p-6 rounded-2xl flex flex-col md:flex-row gap-4 items-center">
              <img
                src={rec.image}
                alt={rec.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
              />
              <div>
                <h3 className="text-xl font-semibold text-white-800">
                  {rec.name}
                </h3>
                <p className="text-sm text-white-500">{rec.title}</p>
                <p className="mt-3 text-white-700 text-base">
                  {rec.recommendation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={() =>
            setCurrent(
              (current - 1 + recommendations.length) % recommendations.length
            )
          }
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
        >
          <FaArrowCircleLeft />
        </button>
        <button
          onClick={() => setCurrent((current + 1) % recommendations.length)}
          className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
        >
          <FaArrowCircleRight />
        </button>
      </div>
    </div>
  );
};

export default LinkedInCarousel;
