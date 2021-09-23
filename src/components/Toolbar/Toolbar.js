import React, { useState, useEffect } from "react";

import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const api = {
  key: "47e2b3172a51d2bbcc48e6f439824141",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Toolbar = (props) => {
  const [query, setQuery] = useState("vilnius");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    location();
  }, []);

  const location = async () => {
    const res = await fetch(
      `${api.base}weather?q=${query}&units=metric&APPID=${api.key}`
    );
    const json = await res.json();
    setWeather(json);
    setQuery("");
  };

  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div>
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar_logo">
          <span className="font-italic">Smart</span>
          <span className="font-weight-bold">Home</span>
        </div>
        <div className="spacer" />
        <div className="toolbar_weather">
          <main>
            {typeof weather.main != "undefined" ? (
              <div>
                <div className="weather-box">
                  <div className="temp">{Math.round(weather.main.temp)}°c</div>
                  <div className="weather">{weather.weather[0].main}</div>
                </div>
                <div className="location-box">
                  <div className="location">
                    {weather.name}, {weather.sys.country}
                  </div>
                  <div className="date">{dateBuilder(new Date())}</div>
                </div>
              </div>
            ) : (
              ""
            )}
          </main>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
