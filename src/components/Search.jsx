import React, { useEffect, useState } from "react";

import sunImage from "../assets/113.png";
import { fetchData, weatherOptions } from "../utils/fetchData";

const Search = () => {
  const [weatherData, setWeatherData] = useState({});
  useEffect(() => {
    const baseUrl = "https://weatherapi-com.p.rapidapi.com/";
    const getLocationWeather = async () => {
      const locationWeatherUrl = `${baseUrl}current.json?q=New%20York`;
      const data = await fetchData(locationWeatherUrl, weatherOptions);
      setWeatherData(data);
    };
    getLocationWeather();
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex justify-center items-center flex-wrap p-8 gap-24">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-6xl font-bold">New York</h2>
          <h4 className="text-lg font-medium">51.25 | -0.11</h4>
        </div>

        <div className="flex flex-col sm:flex-row gap-10 py-14 px-14 shadow-md rounded-md bg-sky-100 bg-opacity-20">
          <div className="flex flex-col justify-end items-center gap-4">
            <h3 className="text-xl font-bold py-4">35C / 110F</h3>
            <h4>Temperature</h4>
          </div>
          <div className="flex flex-col justify-end items-center gap-4">
            <img src={sunImage} />
            <h4>Weather</h4>
          </div>
          <div className="flex flex-col justify-end items-center gap-4">
            <img src={sunImage} />
            <h4>Wind</h4>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-4/5 sm:flex-row items-center justify-center">
        <input className="shadow-md rounded-full w-full sm:w-4/5 lg:w-1/2 py-2 px-5 z-10" />
        <button className="py-2 px-8 my-2 bg-sky-500 text-slate-100 font-medium rounded-full sm:rounded-l-none sm:rounded-r-full relative sm:-left-4">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
