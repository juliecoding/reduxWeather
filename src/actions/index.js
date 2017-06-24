import axios from 'axios'

const API_KEY = '1a48dedf48abf693385fd311625d1d92'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url=`${ROOT_URL}&q=${city},us`
    const request = axios.get(url)

    console.log('Request: ', request)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}

