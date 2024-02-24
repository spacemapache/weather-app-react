import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <p>
        <FormattedDate date={props.data.date} />
      </p>
      <div className="row">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} size={55} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <uL>
            <li>Description: {props.data.description}</li>
            <li>Humidty: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </uL>
        </div>
      </div>
    </div>
  );
}
