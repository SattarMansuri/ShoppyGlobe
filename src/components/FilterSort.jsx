import React, { useState } from "react";
import Filter from "../../public/icons/Filter";

const FilterSort = ({
  selectedCategories,
  setSelectedCategories,
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
  applyFilter,
}) => {
  const [showFilter, setShowFilter] = useState(false);
  const min = 0;
  const max = 2500;

  const categories = ["beauty", "fragrances", "furniture", "groceries"];

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  };

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 10);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 10);
    setMaxValue(value);
  };

  const getTrackStyle = () => {
    const left = ((minValue - min) / (max - min)) * 100;
    const right = 100 - ((maxValue - min) / (max - min)) * 100;
    return {
      left: `${left}%`,
      right: `${right}%`,
    };
  };

  return (
    <div
      onClick={() => setShowFilter(!showFilter)}
      className={`lg:min-w-75 min-w-full flex flex-col gap-3 lg:p-4 p-3 border-2 border-gray-200 lg:mb-0 mb-20 dark:border-gray-600 rounded-lg lg:h-auto transition duration-500 ease-in ${
        showFilter ? "h-auto" : "h-13"
      } overflow-hidden`}
    >
      <div className="flex items-center justify-between border-b-2 border-gray-200 dark:border-gray-600 pb-4">
        <h3 className="lg:text-2xl text-xl font-Inter font-medium dark:text-gray-100">Filters</h3>
        <Filter />
      </div>
      <div className="flex flex-col gap-3 border-b-2 border-gray-200 pb-4 dark:border-gray-600">
        {categories.map((category) => (
          <div key={category} className="flex gap-2 items-center">
            <input
              type="checkbox"
              value={category}
              checked={selectedCategories.includes(category)}
              onChange={handleCategoryChange}
              className="appearance-none w-6 h-6 border-2 flex justify-center items-center border-gray-400 dark:border-gray-600 rounded-sm checked:bg-yellow-200 checked:border-yellow-200 relative transition-colors duration-200 before:content-['✓'] before:absolute before:text-blue-800 before:text-sm font-extrabold before:opacity-0 checked:before:opacity-100 cursor-pointer"
            />
            <label
              htmlFor={category}
              className="lg:text-xl text-lg font-Inter font-medium capitalize dark:text-gray-100"
            >
              {category}
            </label>
          </div>
        ))}
      </div>
      <div className="border-b-2 border-gray-200 dark:border-gray-600 pb-4">
        <h2 className="lg:text-xl text-lg font-Inter font-medium mb-2 dark:text-gray-100">
          PRICE RANGE
        </h2>
        <div className="relative">
          <div
            className="absolute top-3 transform -translate-y-1/2 h-2 bg-yellow-600 dark:bg-yellow-900 rounded-full z-10"
            style={{ ...getTrackStyle(), position: "absolute" }}
          />
          <input
            type="range"
            min={min}
            max={max}
            value={minValue}
            onChange={handleMinChange}
            className="absolute w-full pointer-events-none appearance-none bg-transparent z-20 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-800 cursor-pointer top-[3px]"
          />
          <input
            type="range"
            min={min}
            max={max}
            value={maxValue}
            onChange={handleMaxChange}
            className="absolute w-full pointer-events-none appearance-none bg-transparent z-20 [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-800 cursor-pointer top-[3px]"
          />
        </div>
        <div className="flex justify-between mt-9">
          <span>${minValue}</span>
          <span>${maxValue}</span>
        </div>
      </div>
      <div className="w-full">
        <button
          onClick={(e) => {
            e.stopPropagation()
            applyFilter();
          }}
          className="w-full h-10 bg-yellow-400 dark:bg-yellow-300 dark:hover:bg-yellow-200 rounded-lg cursor-pointer text-xl font-Inter font-semibold text-blue-800 hover:bg-yellow-300 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          APPLY FILTER
        </button>
      </div>
    </div>
  );
};

export default FilterSort;
