import './App.css';
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import {useState} from "react";
import ForeCast from "./components/forecast/foreCast";

function App() {

    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForeCast] = useState(null);

    const handleOnSearchChange = (searchData) => {



       const [ lat, lon ] = searchData.value.split(' ');

       const currentWeatherFetch = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=689d100c6312f8ea8193014ce553ef90&units=metric`)
       const foreCastFetch = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=689d100c6312f8ea8193014ce553ef90&units=metric`)

    Promise.all([currentWeatherFetch, foreCastFetch])
        .then(async (response) => {
            const weatherResponse = await response[0].json();
            const forecastResponse = await response[1].json();

            setCurrentWeather({city: searchData.label, ...weatherResponse});
            setForeCast({city: searchData.label, ...forecastResponse});
        })
        .catch((err) => console.log(err));
    }

    console.log(currentWeather);
    console.log(forecast);

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
        {currentWeather && <CurrentWeather data={currentWeather}/>}
        <ForeCast/>
    </div>
  );
}

export default App;
