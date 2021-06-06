import axios from 'axios';

const API_KEY = '03e3bfb193d7bd05d75c561a7d64dc25'

export async function getCurrentWeatherByName(query) {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`)
    return response.data
}