(()=>{"use strict";const e=function(e,t={},...n){if("fragment"===e)return n;const i=Object.assign(document.createElement(e),t);for(const e of n)Array.isArray(e)?i.append(...e):i.append(e);return i},t=e("div",null,e("div",{className:"form"},e("input",{type:"text",name:"in-city",id:"in-city",className:"input",autocomplete:"off"}),e("div",{className:"search",id:"search"},e("img",{src:"./assets/search.svg",alt:"Search"})))),n=e("div",{className:"display-container"},e("div",{className:"first-container"},e("button",{className:"first-cont-item button",id:"toggle-button"},"Mode"),e("h3",{id:"weather-city",className:"first-cont-item"},"City"),e("h3",{id:"weather-description",className:"first-cont-item"},"Description"),e("h1",{id:"temperature",className:"first-cont-item"},"Temperature")),e("div",{className:"second-container"},e("div",{id:"feels-like-div",className:"second-cont-div"},e("h3",null,"Feels Like"),e("h1",{id:"feels-like"},"Temp")),e("div",{id:"feels-like-div",className:"second-cont-div"},e("h3",null,"Humidity"),e("h1",{id:"humidity"},"Humidity")),e("div",{id:"feels-like-div",className:"second-cont-div"},e("h3",null,"Wind"),e("h1",{id:"wind-speed"},"Windspeed"))));async function i(e){try{""==e&&(e="Delhi");const t=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=944e74f03dd66a3e6a09da32f703a566`),n=await t.json();return console.log(n),console.log(n.weather),console.log(n.wind),console.log(n.main),n}catch(e){console.log(e)}}function o(e){return Math.round(100*e)/100}const c=e=>String(o(e-273.15))+"°C";function d(e){return String(o(9*e/5-459.67))+"°F"}const s=e("div",{className:"city-not-found",id:"city-not-found"},e("p",null,"City Not Found. Displaying default city temperature")),a=document.getElementById("content");a.appendChild(t),a.appendChild(n);const l=document.getElementById("search"),r=document.getElementById("in-city"),m=document.getElementById("weather-description"),u=document.getElementById("weather-city"),y=document.getElementById("temperature"),f=document.getElementById("feels-like"),g=document.getElementById("humidity"),p=document.getElementById("wind-speed"),h=document.getElementById("toggle-button");let v=0,w=0,E=0;function N(){console.log("Wrong city"),t.insertAdjacentElement("afterend",s);const e=document.getElementById("city-not-found");e.style.display="block",setTimeout((()=>{e.style.display="none",e.remove()}),3e3)}function k(e){r.value="",console.log("update first 1:"),console.log(e),console.log("update first 2: "),console.log(e.dt),m.innerText=e.weather[0].main,u.innerText=e.name,w=e.main.temp,B(w,v)}function I(e){E=e.main.feels_like,T(E,v),g.innerText=e.main.humidity+"%",p.innerText=o(60*e.wind.speed*60/1e3)+"km/h"}function B(e,t){let n=t?d(e):c(e);y.innerText=n}function T(e,t){f.innerText=t?d(e):c(e)}r.addEventListener("keydown",(async e=>{if(13==e.keyCode){const e=r.value.toLowerCase();console.log("In city :"+e);const t=await i(e);"200"==t.cod?(k(t),I(t)):404==t.cod&&N()}})),l.addEventListener("click",(async()=>{const e=r.value.toLowerCase();console.log("Search: "+e);const t=await i(e);"200"==t.cod?(k(t),I(t)):"404"==t.cod&&N()})),h.addEventListener("click",(()=>{v=(e=>Number(!e))(v),console.log(`Mode changed to ${v}`),h.innerText=v?"°F":"°C",B(w,v),T(E,v)})),async function(){h.innerText=v?"°F":"°C";const e=await i("");k(e),I(e)}()})();