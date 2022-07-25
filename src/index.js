import { getWeather, kelvinsToCelsius, kelvinsToFahrenheit,speedConverter,modeToggler } from "./App";
import { cityNotFound } from "./CityNotFound";
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

inCity.addEventListener('keydown', async (e)=>{
    if(e.keyCode==13){
        const inputCity = inCity.value.toLowerCase();
        console.log("In city :"+inputCity);
        const data = await getWeather(inputCity);
        if(data.cod=="200"){
            updateFirstContainer(data);
            updateSecondContainer(data);
        }else if(data.cod==404){
            notFound();
        }
    }
})

function notFound(){
    console.log("Wrong city");
    getCity.insertAdjacentElement('afterend',cityNotFound);
    const cityNotFoundEl = document.getElementById("city-not-found");
    cityNotFoundEl.style.display='block';
    setTimeout(() => {
        cityNotFoundEl.style.display='none';
        cityNotFoundEl.remove();
    }, 3000);
}

search.addEventListener('click',async ()=>{
    const inputCity = inCity.value.toLowerCase();
    console.log("Search: "+inputCity);
    const data = await getWeather(inputCity);
    if(data.cod=="200"){
        updateFirstContainer(data);
        updateSecondContainer(data);
    }else if(data.cod=='404'){
        notFound();
    }
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
    console.log("update first 1:");
    console.log(data);
    console.log("update first 2: ")
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

