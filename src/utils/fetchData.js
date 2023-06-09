export const weatherOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_KEY,
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};

export const getIpAddress = async () => {
  const response = await fetch("https://api.ipify.org/?format=json");
  const data = await response.json();

  return data.ip;
};
