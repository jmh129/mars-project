import React from "react";
import { useQuery } from "react-query";
import WeatherCard from "./WeatherCard";

// const api_key = '6hSKiskVmPuDVjGCu0XQ4CaGUIRnZWAXAlz8hVdc'
const fetchWeather = async () => {
  const res = await fetch(
    "https://api.nasa.gov/insight_weather/?api_key=6hSKiskVmPuDVjGCu0XQ4CaGUIRnZWAXAlz8hVdc&feedtype=json&ver=1.0"
  );
  return res.json();
};

const Weather = () => {
  const { data, status } = useQuery("weather", fetchWeather);
  console.log(data);

  return (
    <div>
      <h2>Mars Weather</h2>

      {status === "loading" && <div>Loading Data...</div>}

      {status === "error" && <div>Error Fetching Data</div>}

      {status === "success" && (
        <div>
          {data.sol_keys.map((sol_key, index) => {
            /* Extract sol_value from data, for current sol_key */
            const sol_value = data[sol_key];
            return (
              <WeatherCard
                key={index}
                sol_key={sol_key}
                sol_value={sol_value}
              />
            );
          })}
          )
        </div>
      )}
    </div>
  );
};

export default Weather;
