import { useState } from "react";
import axios from "axios";

function App() {
  const[city,setcity]=useState("")
  const[weather,setweather]=useState("")
  const[temp,settemp]=useState("")
  const[desc,setdesc]=useState("")

  function handleCity(evt){
    setcity(evt.target.value)
  }

  function getWeather(){
    var weatherData= axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dcf4d9a6e37b53419fa9bd0577b185a9`);

    weatherData.then(function(success){
      console.log(success.data)
      setweather(success.data.weather[0].main)
      setdesc(success.data.weather[0].description)
      settemp(success.data.main.temp)
    })
  }
  return (
    
   <div className="bg-black p-20">
    <div className="bg-blue-300 p-10 rounded-md">
    <h1>Weather Report</h1>
    <p>I can give you weather report about your city!</p>
    <input onChange={handleCity} type="text" className="mt-2 border border-black rounded-md"></input><br></br>
    <button onClick={getWeather} className="bg-black text-white p-2 rounded-md mt-2">Get Report</button>
    <div className="mt-2">
      <h1><b>Weather:</b>{weather}</h1>
      <p><b>Temperature:</b>{temp}</p>
      <p><b>Description:</b>{desc}</p>
    </div>
    </div>

   </div>
  );
}

export default App;
