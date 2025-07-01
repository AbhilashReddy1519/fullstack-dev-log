import weatherCode from "./weatherCode";

const dateFromatter = new Intl.DateTimeFormat("en-IN", {
    timeStyle: "short",
    dateStyle: "medium"
});

const fromatDate = (date) => dateFromatter.format(date);

const WeatherSummary = ({todayWeather, isCelsius}) => {
    const date = new Date();
    return(
        <div>
            <h1 className="ui heading center">{isCelsius? `${todayWeather.temperature}°C`: `${((todayWeather.temperature*9/5)+32).toFixed(2)}°F` } | {weatherCode(todayWeather.weatherCode)}</h1>
            <h2 className="ui heading center">{todayWeather.time
                    ? fromatDate(date)
                    : ""}</h2>
        </div>
    )
}

export default WeatherSummary;