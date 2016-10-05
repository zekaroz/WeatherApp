import axios from 'axios';

// Example:
//http://api.openweathermap.org/data/2.5/forecast?q=Lisbon,pt&appid=f7192372076d8355dfa5cb64acc5f3d6
const WEATHER_API_KEY = 'f7192372076d8355dfa5cb64acc5f3d6';
// this is funny ES6 string syntax
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},pt`;
    // this returns a promise
    const request = axios.get(url);

    console.log('calling APi: ' + url);

    return {
      type: FETCH_WEATHER,
      payload: request
    }
}
