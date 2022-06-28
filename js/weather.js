const APIKey = "ybaTacvAsNPZeugGTCPQSxlqJAlk5ZSA";

const getWeatherURL = (keyCity) =>
  `http://dataservice.accuweather.com/currentconditions/v1/${keyCity}?apikey=${APIKey}`;

const getCityURL = (cityName) =>
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`;

const getCityData = async (cityName) => {
  try {
    const cityURL = getCityURL(cityName);
    const response = await fetch(cityURL);
    if (!response.ok) {
      throw new Error("Não foi possível obter os dados da cidade.");
    }
    const [cityData] = await response.json();
    return cityData;
  } catch ({ name, message }) {
    alert(`${name}: ${message}`);
  }
};

const getCityWeather = async (cityName) => {
  try {
    const { Key } = await getCityData(cityName);
    const cityWeatherURL = getWeatherURL(Key);
    const response = await fetch(cityWeatherURL);
    if (!response.ok) {
      throw new Error("Não foi possível obter os dados do clima.");
    }
    const [cityWeatherData] = await response.json();
    return cityWeatherData;
  } catch ({ name, message }) {
    alert(`${name}: ${message}`);
  }
};

getCityWeather("Miami");
