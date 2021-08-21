import createElement from "./createElement";
const getCity = (
  <div>
    <div className='form'>
      <input type="text" name="in-city" id="in-city" className='input' autocomplete="off" />
      <div className='search' id='search'>
        <img src="../src/search.svg" alt="Search" />
      </div>
    </div>
  </div>
);

const displayContainer = (
  <div className='display-container'>
    <div className="first-container">
      <button className='first-cont-item button' id='toggle-button'>Mode</button>
      <h3 id='weather-city' className='first-cont-item'>City</h3>
      <h3 id='weather-description' className='first-cont-item'>Description</h3>
      <h1 id='temperature' className='first-cont-item'>Temperature</h1>
      {/* <p id='weather-time'>Time</p> */}
    </div>
    <div className="second-container">
      <div id='feels-like-div' className='second-cont-div'>
        <h3>Feels Like</h3>
        <h1 id='feels-like'>Temp</h1>
      </div>
      <div id='feels-like-div' className='second-cont-div'>
        <h3>Humidity</h3>
        <h1 id='humidity'>Humidity</h1>
      </div>
      <div id='feels-like-div' className='second-cont-div'>
        <h3>Wind</h3>
        <h1 id='wind-speed'>Windspeed</h1>
      </div>
    </div>
  </div>
);

export { getCity, displayContainer };