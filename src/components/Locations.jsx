import React, { useEffect } from "react";

import sunImage from "../assets/113.png";

const Locations = ({ previousLocations, setPreviousLocations }) => {
  const locations = ["New York", "Paris", "Berlin"];

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("locations"));
    setPreviousLocations(localStorageData);
  }, []);

  const handleRemove = (city) => {
    const locationsAfterRemove = previousLocations.filter((item) => item.location.name !== city);
    setPreviousLocations(locationsAfterRemove);
    localStorage.removeItem("locations");
    localStorage.setItem("locations", JSON.stringify(locationsAfterRemove));
  };

  return (
    <div className="flex flex-col items-center px-4">
      {previousLocations?.length > 0 && <h4>Previously Searched Locations:</h4>}
      <div className="flex flex-col sm:flex-row gap-4 py-4">
        {previousLocations?.map((item, index) => (
          <div
            className="flex flex-col items-center gap-2 shadow-md py-3 px-12 rounded-md bg-sky-100 bg-opacity-20 group relative"
            key={`location-${index}`}
          >
            <img src={item.current.condition.icon} />
            <h4 className="font-medium text-lg">{item.location.name}</h4>
            <h5>
              {item.current.temp_c}°C / {item.current.temp_f}°F
            </h5>
            <div className="absolute top-0 right-0 rounded-md px-1 font-medium text-sm border-2 border-red-900 text-red-900 hover:text-white hover:bg-red-900 invisible group-hover:visible">
              <button onClick={() => handleRemove(item.location.name)} className="p-2">
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
