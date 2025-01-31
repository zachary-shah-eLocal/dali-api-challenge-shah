import { useEffect, useState } from "react"
import Forecast from "./components/Forecast"
import Inputs from "./components/Inputs"
import TemperatureAndDetails from "./components/TemperatureAndDetails"
import TimeAndLocation from "./components/TimeAndLocation"
import TopButtons from "./components/TopButtons"
import getFormattedWeatherData from "./features/weatherService"

const App = () => {

  const [query, setQuery] = useState({q: 'boston'})
  const [units, setUnits] = useState('imperial')
  const [weather, setWeather] = useState(null)

  const getWeather = async () => {
    await getFormattedWeatherData({...query, units}).then(data => {
      setWeather(data)
    });
  };

  useEffect(() => {
    getWeather();
  }, [query, units])

  getWeather();

  return (
    <div className="mx-5 max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700">
      <TopButtons />
      <Inputs />

      {weather && (
        <>
          <TimeAndLocation weather={weather}/>
          <TemperatureAndDetails weather={weather}/>
          <Forecast />
          <Forecast />
        </>
      )}

      
    </div>
  )
}

export default App