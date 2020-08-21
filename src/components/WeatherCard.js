import React from "react";

const WeatherCard = ({ sol_key, sol_value }) => {
  return (
    <div className="card">
      <h3>Sol:{sol_key}</h3>
      <p>Avergae Temp:{JSON.stringify(sol_value.AT.mx)} </p>
      <p>
        AWind Directon:{JSON.stringify(sol_value.WD[0].compass_point)}{" "}
      </p>
      <p>Season:{sol_value.Season} </p>
    </div>
  );
};

export default WeatherCard;
