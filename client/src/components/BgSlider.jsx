import { useState } from "react";
import { assets, categories } from "../assets/assets";

const BgSlider = () => {
  const [slidePosition, setSlidePosition] = useState(50);
  const [activeCategory, setActiveCategory] = useState("People");

  const handleSliderChange = (e) => {
    setSlidePosition(Number(e.target.value)); // always number
  };

  return (
    <div className="mb-16 relative">
      {/* Section title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
        Stunning quality.
      </h2>

      {/* Category selector */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex gap-4 bg-gray-100 p-2 rounded-full flex-wrap justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-white text-gray-800 shadow-sm"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Image comparison slider */}
      <div className="relative w-full max-w-4xl overflow-hidden m-auto rounded-xl shadow-lg">

        {/* TOP IMAGE — Removed background */}
        <img
          src={assets.people}
          alt="removed background"
          style={{ clipPath: `inset(0 0 0 ${slidePosition}%)` }}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        {/* BOTTOM IMAGE — Original */}
        <img
          src={assets.people_org}
          alt="original"
          style={{ clipPath: `inset(0 ${100 - slidePosition}% 0 0)` }}
          className="w-full h-full object-cover"
        />

        {/* Slider Input */}
        <input
          type="range"
          min={0}
          max={100}
          value={slidePosition}
          onChange={handleSliderChange}
          className="absolute top-1/2 left-1/2 w-full z-10 transform -translate-x-1/2 -translate-y-1/2 slider"
        />
      </div>
    </div>
  );
};

export default BgSlider;
