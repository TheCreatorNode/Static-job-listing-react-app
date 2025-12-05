import { useState } from "react";
import React from "react";

import BgHeader from "./BgHeader";
import DisplayList from "./DisplayList";
import Filter from "./Filter";

const App = () => {
  const [filters, setFilters] = useState([]);

  function handleRemoveFilter(f) {
    setFilters((filters) => filters.filter((tag) => tag !== f));
  }

  function handleClear() {
    setFilters([]);
  }
  return (
    <div className="bg-gray-200 ">
      <BgHeader />
      {filters.length > 0 && (
        <Filter
          filters={filters}
          onRemove={handleRemoveFilter}
          onClear={handleClear}
        />
      )}
      <div className=" bg-green-50  p-15">
        <DisplayList filters={filters} setFilters={setFilters} />
      </div>
    </div>
  );
};

export default App;
