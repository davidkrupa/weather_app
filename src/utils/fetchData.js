export const weatherOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.RAPID_KEY,
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
