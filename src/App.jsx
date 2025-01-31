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
  }, [query, units]);



  return (
    <div className="overflow-y-scroll overscroll-none">
    <div className="py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700 min-h-screen">
      <TopButtons setQuery={setQuery}/>
      <Inputs setQuery={setQuery} setUnits={setUnits}/>

      {weather && (
        <>
          <TimeAndLocation weather={weather}/>
          <TemperatureAndDetails weather={weather} units={units}/>
          <Forecast title='hourly forecast' data={weather.hourly}/>
          <Forecast title='weekly forecast' data={weather.daily}/>
        </>
      )}

      
    </div>
    </div>
  )
}

export default App