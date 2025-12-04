import React from "react";
import { useState } from "react";

const Search = ({ filters, setFilters }) => {
  const [search, setSearch] = useState("");

  function clearSearch() {
    setSearch("");
    setFilters([]);
  }

  return (
    <div className="w-full relative bg-green-50">
      <div className="absolute -bottom-7 w-full flex justify-center items-center ">
        <input
          type="text"
          className="w-[75%] p-4 bg-white rounded-[5px] shadow-xl focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key == "Enter" && search.trim !== "") {
              const inputs = search.trim().split(/\s+/);
              if (!filters.includes(search.trim())) {
                setFilters([...filters, ...inputs]);
              } else {
                setFilters([]);
              }
            }
          }}
        />
        <span
          className="z-10 absolute right-55 font-bold text-gray-400  hover:text-blue-600 hover:underline cursor-pointer"
          onClick={clearSearch}
        >
          Clear
        </span>
      </div>
    </div>
  );
};

export default Search;
