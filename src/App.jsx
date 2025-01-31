import Forecast from "./components/Forecast"
import Inputs from "./components/Inputs"
import TemperatureAndDetails from "./components/TemperatureAndDetails"
import TimeAndLocation from "./components/TimeAndLocation"
import TopButtons from "./components/TopButtons"
import getFormattedWeatherData from "./features/weatherService"

const App = () => {

  const getWeather = async () => {
    const data = await getFormattedWeatherData({q: 'boston'});
    console.log(data);
  };

  getWeather();

  return (
    <div className="mx-5 max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast />
      <Forecast />
    </div>
  )
}

export default App