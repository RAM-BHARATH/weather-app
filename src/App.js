import createElement from "./createElement";
import { getCity } from './Temp';
const key = '944e74f03dd66a3e6a09da32f703a566';

async function getWeather(city) {
  try {
    if (city == '') {
      city = 'Delhi';
    }

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    const data = await res.json();
    console.log(data);
    console.log(data.weather);
    console.log(data.wind);
    console.log(data.main);
    return data;
  } catch (e) {
    console.log(e);
  }
}

function round(number) {
  return Math.round(number * 100) / 100;
}

const kelvinsToCelsius = kelvins => String(round(kelvins - 273.15, 2)) + '\u00B0' + 'C';

function kelvinsToFahrenheit(kelvins) {
  return String(round(kelvins * 9 / 5 - 459.67)) + '\u00B0' + 'F';
}

const speedConverter = speedInMPerS => round(speedInMPerS * 60 * 60 / 1000);

const modeToggler = mode => Number(!mode);

export { getWeather, kelvinsToCelsius, kelvinsToFahrenheit, speedConverter, modeToggler };