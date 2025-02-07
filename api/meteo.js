
import axios from "axios/dist/axios";


export class meteoAPI {
    static async fetchWeatherByCoords(coords){
        
        return (
            await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${coords.late}&longitude=${coords.lng}&daily=weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max&timezone=auto&current_weather=true`
            )
        ).data;    
    }
}