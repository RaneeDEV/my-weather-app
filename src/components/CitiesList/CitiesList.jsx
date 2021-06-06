
import { useCities } from './../../hooks/useWeatherData';
import WeatherCard from './../WeatherCard/WeatherCard';


export default function CitiesList() {
    const [cities] = useCities()
    return (
        <>
            {cities.map(city => <WeatherCard city={city} key={city.id}/>)}
        </>
    )
}