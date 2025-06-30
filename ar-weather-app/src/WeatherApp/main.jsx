import { useEffect, useState } from "react";
import WeatherRow from "./components/WeatherRow";
import WeatherSummary from "./components/WeatherSummary";
import getWeather from "./Api/WeatherApi";


const fetchCoordinates = (callback) => {
    navigator.geolocation.getCurrentPosition(
        ({coords : {latitude, longitude}}) => {
            callback(latitude, longitude);
        },
        (err) => {console.error(err)}    
    )
}

function Main() {

    const[todayWeather, setTodayWeather] = useState({})
    const[weekWeather, setWeekWeather] = useState([]);
    const[isCelsius, setIsCelsius] = useState(true);

    const isDay = todayWeather.isDay ?? true;

    useEffect(()=> {
        fetchCoordinates(async (latitude, longitude) => {
            const weatherInfo = await getWeather({latitude, longitude});
            console.log(weatherInfo);
            convertIntoStateVariable(weatherInfo);
        })
    },[])

    const convertIntoStateVariable = (tempWeatherInfo) => {
        let tempWeekInfo = [];
        for(let i = 0;i < tempWeatherInfo.daily.time.length;i++) {
            tempWeekInfo.push({
                date: new Date(tempWeatherInfo.daily.time[i]),
                maxTemperatue: tempWeatherInfo.daily.temperature_2m_max[i],
                minTemperatue: tempWeatherInfo.daily.temperature_2m_min[i],
                weathercode: tempWeatherInfo.daily.weathercode[i]
            });
        }
        setWeekWeather(tempWeekInfo);
        // setWeekWeather((prev) => {
        //     prev.push(tempWeekInfo);
        // });
        let currentWeather = tempWeatherInfo.current_weather;
        currentWeather.time = new Date(currentWeather.time);
        currentWeather.isDay = currentWeather.is_day === 1? true : false;
        delete currentWeather.is_day;
        currentWeather.weatherCode = currentWeather.weathercode;
        delete currentWeather.weathercode;
        setTodayWeather(currentWeather);

    }

    return(
        <>
            <div className= {isDay ? "box" : "box dark"}>
                <h1 className="center ui heading">Weather App ☁️</h1>
                <button style={{boxShadow: isDay? "none" : "0 0 10px white"}} className="ui icon black button btn" onClick={() => {
                    setIsCelsius(!isCelsius); 
                    // console.log(todayWeather);
                }}>{isCelsius ? "°C" : "°F"}</button>
                <div>
                    <WeatherSummary todayWeather={todayWeather} isCelsius={isCelsius}/>
                    <table className={`ui celled ${isDay ? "" : "inverted"} table`}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Temperature</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <WeatherRow weekWeather={weekWeather} isCelsius={isCelsius}/>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Main;