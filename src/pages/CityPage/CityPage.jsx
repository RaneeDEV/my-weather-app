import WeatherCard from "./../../components/WeatherCard/WeatherCard";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getCurrentWeatherByName, getCurrentWeatherById } from "../../api/oswm";
export default function CityPage() {
  const history = useHistory();
  const { q } = useParams();
  const [city, setCity] = useState(null);
  useEffect(() => {
    if (q) {
      getCityData(q);
    }
  }, [q]);
  async function getCityData(query) {
    let data = null;
    try {
      if (typeof +query === "number" && !isNaN(+query)) {
        data = await getCurrentWeatherById(query);
      } else {
        data = await getCurrentWeatherByName(query);
      }
      const newCity = { id: data.id, name: data.name, country: data.sys.country, data };
      setCity(newCity);
    } catch (error) {
      history.push("/404");
    }
  }
 
  return <>{city && <WeatherCard city={city} single></WeatherCard>}</>;
}
