import { useEffect, useState } from "react";
import WeatherRow from "./components/WeatherRow";
import WeatherSummary from "./components/WeatherSummary";


const fetchCoordinates = (callback) => {
    navigator.geolocation.getCurrentPosition(
        ({coords : {latitude, longitude}}) => {
            callback(latitude, longitude);
        },
        (err) => {console.error(err)}    
    )
}

function Main() {

    const[isDay, setIsDay] = useState(false);
    useEffect(()=> {
        fetchCoordinates((latitude, longitude) => {
            console.log(latitude, longitude);
        })
    },[])

    return(
        <>
            <div className= {isDay ? "box" : "box dark"}>
                <h2 className="center ui heading">Weather App ☁️</h2>
                <button style={{boxShadow: isDay? "none" : "0 0 10px white"}} className="ui icon black button btn" onClick={() => {
                    console.log("Btn clicked");setIsDay(!isDay);
                }}>°F</button>
                <div>
                    <WeatherSummary />
                    <table className={`ui celled ${isDay ? "" : "inverted"} table`}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Temperature</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <WeatherRow />
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Main;