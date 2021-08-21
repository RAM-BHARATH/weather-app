import { getWeather, kelvinsToCelsius, kelvinsToFahrenheit,speedConverter,modeToggler } from "./App";
import { getCity, displayContainer } from "./Temp";

const content = document.getElementById('content');

// getWeather('Chennai');
content.appendChild(getCity);
content.appendChild(displayContainer);

const search = document.getElementById('search');
const inCity =  document.getElementById('in-city');
const weatherDescription = document.getElementById('weather-description');
const weatherCity = document.getElementById('weather-city');
// const weatherTime = document.getElementById('weather-time');
const temperature = document.getElementById('temperature');
const feelsLike = document.getElementById('feels-like');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const toggleButton = document.getElementById('toggle-button');

let mode = 0; //0 for Celsius, 1 for fahrenheit;
let ogTemp = 0;
let ogFeelsLike = 0;
// const weatherIcon = 

search.addEventListener('click',async ()=>{
    const inputCity = inCity.value.toLowerCase();
    console.log(inputCity);
    const data = await getWeather(inputCity);
    
    updateFirstContainer(data);
    updateSecondContainer(data);
});

toggleButton.addEventListener('click',()=>{
    mode=modeToggler(mode);
    console.log(`Mode changed to ${mode}`);
    toggleButton.innerText = mode? ('\u00B0'+'F'):('\u00B0'+'C');
    setTemperature(ogTemp, mode);
    setFeelsLike(ogFeelsLike, mode);
});

function updateFirstContainer(data){
    inCity.value=''; 
    console.log(data);
    console.log(data.dt);
    weatherDescription.innerText=data.weather[0].main;
    weatherCity.innerText = data.name;
    ogTemp = data.main.temp;    
    setTemperature(ogTemp,mode,ogFeelsLike);
    // let time = new Date(data.dt*1000);
    // weatherTime.innerText = time;
    return;
}

function updateSecondContainer(data){
    ogFeelsLike = data.main.feels_like;
    setFeelsLike(ogFeelsLike, mode);
    humidity.innerText = data.main.humidity+'%';
    windSpeed.innerText = speedConverter(data.wind.speed)+'km/h';
}

function setTemperature(ogTemp, mode){
    let temp = mode?(kelvinsToFahrenheit(ogTemp)):(kelvinsToCelsius(ogTemp)); //data.main.temp
    temperature.innerText = temp;
}

function setFeelsLike(ogFeelsLike, mode){
    feelsLike.innerText=mode?(kelvinsToFahrenheit(ogFeelsLike)):(kelvinsToCelsius(ogFeelsLike));
}

async function initialCall(){
    toggleButton.innerText = mode? ('\u00B0'+'F'):('\u00B0'+'C');
    const data = await getWeather('');
    
    updateFirstContainer(data);
    updateSecondContainer(data);

}

initialCall();

