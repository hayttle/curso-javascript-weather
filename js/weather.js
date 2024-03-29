const APIKey = "ybaTacvAsNPZeugGTCPQSxlqJAlk5ZSA";
const baseURL = "http://dataservice.accuweather.com/";

const getCityURL = (cityName) =>
  `${baseURL}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`;

const getWeatherURL = (cityKey) => 
  `${baseURL}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-BR`;

const fetchData = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Não foi possível obter os dados da cidade.");
    }

    return response.json();
  } catch ({name, message}) {
    alert(`${name}: ${message}`);
  }
};

const getCityData = (cityName) => fetchData(getCityURL(cityName))

const getCityWeather = (cityKey) => fetchData(getWeatherURL(cityKey));