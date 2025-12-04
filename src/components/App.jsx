import { useState } from "react";
import React from "react";

import BgHeader from "./BgHeader";
import DisplayList from "./DisplayList";
import Search from "./Search";

const App = () => {
  const [filters, setFilters] = useState([]);
  return (
    <div className="bg-gray-200 ">
      <BgHeader />
      <Search filters={filters} setFilters={setFilters} />
      <div className=" bg-green-50  p-15">
        <DisplayList filters={filters} />
      </div>
    </div>
  );
};

export default App;
