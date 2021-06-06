import axios from 'axios';

const API_KEY = '890a1d7c34adf091a332f9a6a3ae2f3c'

export async function getCurrentWeatherByName(query) {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`)
    return response.data
}