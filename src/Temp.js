import createElement from "./createElement";
const getCity = createElement("div", null, createElement("div", {
  className: "form"
}, createElement("input", {
  type: "text",
  name: "in-city",
  id: "in-city",
  className: "input",
  autocomplete: "off"
}), createElement("div", {
  className: "search",
  id: "search"
}, createElement("img", {
  src: "./assets/search.svg",
  alt: "Search"
}))));
const displayContainer = createElement("div", {
  className: "display-container"
}, createElement("div", {
  className: "first-container"
}, createElement("button", {
  className: "first-cont-item button",
  id: "toggle-button"
}, "Mode"), createElement("h3", {
  id: "weather-city",
  className: "first-cont-item"
}, "City"), createElement("h3", {
  id: "weather-description",
  className: "first-cont-item"
}, "Description"), createElement("h1", {
  id: "temperature",
  className: "first-cont-item"
}, "Temperature")), createElement("div", {
  className: "second-container"
}, createElement("div", {
  id: "feels-like-div",
  className: "second-cont-div"
}, createElement("h3", null, "Feels Like"), createElement("h1", {
  id: "feels-like"
}, "Temp")), createElement("div", {
  id: "feels-like-div",
  className: "second-cont-div"
}, createElement("h3", null, "Humidity"), createElement("h1", {
  id: "humidity"
}, "Humidity")), createElement("div", {
  id: "feels-like-div",
  className: "second-cont-div"
}, createElement("h3", null, "Wind"), createElement("h1", {
  id: "wind-speed"
}, "Windspeed"))));
export { getCity, displayContainer };