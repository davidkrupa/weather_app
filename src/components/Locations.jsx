import React from "react";

const Locations = () => {
  const locations = ["New York", "Paris", "Berlin"];
  return (
    <div className="flex gap-4 py-4">
      {locations.map((item, index) => (
        <div
          className="flex flex-col items-center gap-3 shadow-md p-3 rounded-md"
          key={`location-${index}`}
        >
          <h4>{item}</h4>
          <div className="h-24 w-24">Image</div>
          <h5>35C / 90F</h5>
        </div>
      ))}
    </div>
  );
};

export default Locations;
