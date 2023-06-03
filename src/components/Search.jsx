import React from "react";

const Search = () => {
  return (
    <div>
      <div className="flex gap-6 py-5">
        <div className="w-32 h-32 shadow-md rounded-md">Image</div>
        <div className="flex flex-col justify-center gap-3">
          <h3>Temperature</h3>
          <h4>Weather</h4>
        </div>
      </div>
      <div className="flex">
        <input className="shadow-md rounded-full py-2 px-5 z-10" />
        <button className="py-2 px-8 bg-slate-500 text-slate-100 font-medium rounded-r-full relative -left-4">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
