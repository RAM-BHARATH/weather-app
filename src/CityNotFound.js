import createElement from "./createElement";
const cityNotFound = createElement("div", {
  className: "city-not-found",
  id: "city-not-found"
}, createElement("p", null, "City Not Found. Displaying default city temperature"));
export { cityNotFound };
