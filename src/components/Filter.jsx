import React from "react";

const Filter = ({ filters, onRemove, onClear }) => {
  return (
    <div className="w-full m-auto relative bg-green-50">
      <div className=" w-[65%] m-auto p-4 flex gap-5 bg-white absolute right-70 -bottom-7">
        {filters.map((f) => (
          <div
            key={f}
            className="flex items-center bg-gray-100 text-[hsl(180,29%,30%)] font-bold rounded overflow-hidden"
          >
            <span className="px-3 py-1">{f}</span>

            <button
              onClick={() => onRemove(f)}
              className="bg-teal-600 text-white px-2 hover:bg-black/70"
            >
              ✕
            </button>
          </div>
        ))}

        <span
          className="absolute right-5 font-bold text-gray-400  hover:text-teal-600 hover:underline cursor-pointer"
          onClick={onClear}
        >
          Clear
        </span>
      </div>
    </div>
  );
};

export default Filter;
