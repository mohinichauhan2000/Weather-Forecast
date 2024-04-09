import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./SearchBox.css";



export default function SearchBox({updateInfo}){
    let [city,SetCity]=useState("");
    let [error,SetError]=useState(false);
    const API_key="58e564856499263e686e2843e048c20d";
    const API_URL=  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric` ;
   

    let getWeatherInfo = async (city) => {
      try{
        let response =  await fetch(API_URL);
        let jsonResponse= await response.json();
        console.log(jsonResponse);
        let result = {
            city: jsonResponse.name,
         temp: jsonResponse.main.temp,
         tempMin : jsonResponse.main.temp_min,
         tempMax: jsonResponse.main.temp_max,
         humidity: jsonResponse.main.humidity,
         feels_like: jsonResponse.main.feels_like,
         weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
      }catch(err){
        throw err  ;
      }
       
    };

    let handleChange = (event) =>{
        SetCity(event.target.value)
    }

    let handleSubmit = async ( event)=>{
        try{event.preventDefault();
            console.log(city);
            SetCity("");
           let newInfo = await getWeatherInfo();
           updateInfo(newInfo);}
           catch(err){
            SetError(true);
           }
        
    }

    return(<div className='city'>
        {/* <h2> Search for weather</h2> */}
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined"  value={city}  onChange={handleChange} required/>
       <br></br>
       <br></br>
        <Button variant="contained"  onClick={handleSubmit}>
        search
        </Button>
        {error && <p>"no such place exist in API"</p>}
        </form>
    </div>);
}