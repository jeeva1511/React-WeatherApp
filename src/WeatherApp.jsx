import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Current from "./components/Current";
import Forecast from "./components/Forecast";
import "../node_modules/bootstrap/dist/js/bootstrap"


const WeatherApp = () => {
  const [city, setCity] = useState();
  const [clickedCity, setClicekdCity] = useState();
  const [citySuggestion, setCitySuggustion] = useState([]);
  const [current, setCurrent] = useState();
  const [forecast, setforecast] = useState();
  const [location, setLocation] = useState();

  const weatherUrl =
    "https://api.weatherapi.com/v1/search.json?key=c85726411b3749a9ba1142147241610&q=";

  const completedWeatherUrl = (city) =>
    `https://api.weatherapi.com/v1/forecast.json?key=c85726411b3749a9ba1142147241610&q=${city}&days=7&aqi=yes&alerts=no`;

  useEffect(() => {
    if (city && city.length > 2) {
      fetchAutoCompleteApi();
    }
  }, [city]);

  const fetchAutoCompleteApi = async () => {
    try {
      const response = await axios.get(weatherUrl + city);
      const resp = response.data;
      console.log(resp);

      const cityData = resp.map((data) => {
        return `${data.name}, ${data.region}, ${data.country}`;
      });
      setCitySuggustion(cityData);
    } catch (e) {
      console.log("error", e);
    }
  };

  const handleSelectedCity = (city) => {
    fetchCompletedWeatherApi(city);
    console.log(city);
    setCitySuggustion([]);
    setClicekdCity(city);
  };

  const fetchCompletedWeatherApi = async (city) => {
    try {
      const response = await axios.get(completedWeatherUrl(city));
      const resp = response.data;
      // console.log(resp) ;
      setCurrent(resp.current);
      setforecast(resp.forecast);
      setLocation(resp.location);

      console.log(resp.current);
      console.log(resp.forecast);
    } catch (e) {
      console.log("Error", e);
    }
  };

  return (
    <div className=" p-5 rounded container  mt-3 weathercontainer">
      <input
        type="search"
        className="form-control"
        onChange={(e) => {
          setCity(e.target.value);
          if(e.target.value === ''){
            setCurrent('');
            setCity();
            setCitySuggustion();
            setClicekdCity();
            setLocation();
            setforecast();
          }
        }}
        placeholder="Enter City Name"
        value={clickedCity}
      />

      {citySuggestion &&
        citySuggestion.map((data, index) => {
          return (
            <div
              key={index}
              className=" text-center  rounded p-2 bg-opacity-50%
             border border-primary border-opacity-9 my-2 selectedWeather"
              style={{ cursor: "pointer" }}
              onClick={() => handleSelectedCity(data)}
            >
              {data}
            </div>
          );
        })}
      {current && <Current current={current} location={location} />}
      {current && <Forecast forecast={forecast} location={location} />}
    </div>
  );
};

export default WeatherApp;
