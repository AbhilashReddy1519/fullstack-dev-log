import weatherCode from "./weatherCode";

const dateFromatter = new Intl.DateTimeFormat("en-IN", {
    // month: "short",
    // year: "numeric",
    dateStyle: "medium"
});

const fromatDate = (date) => dateFromatter.format(date);

function WeatherRow( { weekWeather, isCelsius } ) {
    return(
        <>
            {
                weekWeather.map((item, index) => (
                    <tr key={index}>
                        <td data-label="Date">{fromatDate(new Date(item.date))}</td>
                        <td data-label="Temperature">{isCelsius ? `${item.maxTemperatue}°C / ${item.minTemperatue}°C`: `${((item.maxTemperatue*9/5)+32).toFixed(2)}°F / ${((item.minTemperatue*9/5)+32).toFixed(2)}°F`}</td>
                        <td data-label="Type">{weatherCode(item.weathercode)}</td>
                    </tr>
                ))
            }
        </>
    )
}


export default WeatherRow;