import React, { useEffect, useState } from "react";
import {
  BsArrowDown,
  BsArrowLeft,
  BsArrowRight,
  BsArrowUp,
  BsArrowUpLeft,
  BsArrowUpRight,
  BsArrowDownLeft,
  BsArrowDownRight,
} from "react-icons/bs";

import { fetchData, weatherOptions, getIpAddress } from "../utils/fetchData";

const Search = () => {
  const [weatherData, setWeatherData] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [ip, setIp] = useState("");
  const { current, location } = weatherData;
  const baseUrl = "https://weatherapi-com.p.rapidapi.com/";

  const reducedWindDirection =
    current?.wind_dir?.length < 3
      ? current?.wind_dir
      : current?.wind_dir?.slice(1, 3);

  const windCompass = {
    N: <BsArrowUp className="wind-compass" />,
    NE: <BsArrowUpRight className="wind-compass" />,
    E: <BsArrowRight className="wind-compass" />,
    SE: <BsArrowDownRight className="wind-compass" />,
    S: <BsArrowDown className="wind-compass" />,
    SW: <BsArrowDownLeft className="wind-compass" />,
    W: <BsArrowLeft className="wind-compass" />,
    NW: <BsArrowUpLeft className="wind-compass" />,
  };

  useEffect(() => {
    const locationWeatherUrl = `${baseUrl}current.json?q=New%20York`;
    getLocationWeather(locationWeatherUrl);
    const currentIpAddress = async () => {
      const data = await getIpAddress();
      setIp(data);
    };
    currentIpAddress();
  }, []);

  const handleSearch = () => {
    const correctFormatSearchQuery = searchQuery.split(" ").join("%20"); // encodeURI may change state
    const locationWeatherUrl = `${baseUrl}current.json?q=${correctFormatSearchQuery}`;
    getLocationWeather(locationWeatherUrl);
  };

  const getLocationWeather = async (locationWeatherUrl) => {
    const data = await fetchData(locationWeatherUrl, weatherOptions);
    setWeatherData(data);
  };

  return (
    <div className="flex flex-col items-center w-full">
      {weatherData.current ? (
        <div className="flex justify-center items-center flex-wrap p-8 gap-24">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-6xl font-bold">{location.name}</h2>
            <h4 className="text-lg font-medium">
              {location.lat} | {location.lon}
            </h4>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 py-14 px-14 shadow-md rounded-md bg-sky-100 bg-opacity-20">
            <div className="flex flex-col justify-end items-center gap-4">
              <h3 className="text-xl font-bold py-4">
                {current.temp_c}°C / {current.temp_f}°F
              </h3>
              <h4>Temperature</h4>
            </div>
            <div className="flex flex-col justify-end items-center gap-4">
              <img src={current.condition.icon} />
              <h4>Weather</h4>
            </div>
            <div className="flex flex-col justify-end items-center gap-4">
              {windCompass[reducedWindDirection]}
              <h4>Wind</h4>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-wrap p-8 gap-24">
          <h2 className="text-6xl font-bold">Loading...</h2>
        </div>
      )}

      <div className="flex flex-col w-4/5 sm:flex-row items-center justify-center">
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="shadow-md rounded-full w-full sm:w-4/5 lg:w-1/2 py-2 px-5 z-10"
        />
        <button
          type="button"
          onClick={() => {
            handleSearch();
          }}
          className="py-2 px-8 my-2 bg-sky-500 text-slate-100 font-medium rounded-full sm:rounded-l-none sm:rounded-r-full relative sm:-left-4"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
