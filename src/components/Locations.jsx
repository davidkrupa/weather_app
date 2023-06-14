import React, { useEffect } from "react";

import sunImage from "../assets/113.png";

const Locations = ({ previousLocations, setPreviousLocations }) => {
  const locations = ["New York", "Paris", "Berlin"];

  console.log(previousLocations);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("locations"));
    setPreviousLocations(localStorageData);
  }, []);
  return (
    <div className="flex flex-col items-center px-4">
      {previousLocations && <h4>Previously Searched Locations:</h4>}
      <div className="flex flex-col sm:flex-row gap-4 py-4">
        {previousLocations?.map((item, index) => (
          <div
            className="flex flex-col items-center gap-2 shadow-md py-3 px-12 rounded-md bg-sky-100 bg-opacity-20"
            key={`location-${index}`}
          >
            <img src={item.current.condition.icon} />
            <h4 className="font-medium text-lg">{item.location.name}</h4>
            <h5>
              {item.current.temp_c}°C / {item.current.temp_f}°F
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Locations;
