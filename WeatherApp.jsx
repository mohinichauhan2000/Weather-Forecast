import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo,setWestherInfo]=useState({
        city : "delhi",
        
        temp: 34,
        tempMin: 23,
        tempMax: 45,
        humidity: 46,
        weather:"haze",
        feels_like: 32,
    });

    let updateInfo=(newInfo)=>{
        setWestherInfo(newInfo);
    }

    return(<div style={{textAlign:"center"}}>
        <h1>Weather App</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    
    </div>)
}