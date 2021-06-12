import styles from "./WeatherCard.module.css";
import { useCities } from "./../../hooks/useWeatherData";
import { useHistory } from "react-router-dom";

// {
//   "id": 698740,
//   "name": "Odesa",
//   "country": "UA",
//   "data": {
//       "coord": {
//           "lon": 30.7326,
//           "lat": 46.4775
//       },
//       "weather": [
//           {
//               "id": 802,
//               "main": "Clouds",
//               "description": "scattered clouds",
//               "icon": "03d"
//           }
//       ],
//       "base": "stations",
//       "main": {
//           "temp": 22.96,
//           "feels_like": 22.88,
//           "temp_min": 22.73,
//           "temp_max": 22.96,
//           "pressure": 1011,
//           "humidity": 60
//       },
//       "visibility": 10000,
//       "wind": {
//           "speed": 5,
//           "deg": 80
//       },
//       "clouds": {
//           "all": 40
//       },
//       "dt": 1623161105,
//       "sys": {
//           "type": 1,
//           "id": 8915,
//           "country": "UA",
//           "sunrise": 1623117899,
//           "sunset": 1623174452
//       },
//       "timezone": 10800,
//       "id": 698740,
//       "name": "Odesa",
//       "cod": 200
//   }
// }

function WeatherCard({ city, single }) {
  const history = useHistory();
  const [cities, dispatchCities] = useCities();
  function saveCity() {
    dispatchCities({ type: "ADD_CITY", payload: city });
    const savedCities = JSON.parse(window.localStorage.cities);
    if (!savedCities.find((savedCity) => savedCity.id === city.id)) {
      const newCity = { id: city.id, name: city.name, country: city.country };
      window.localStorage.cities = JSON.stringify([...savedCities, newCity]);
    }
  }
  return (
    <>
      <div className={styles["card"]}>
        <div className={styles["card__header"]}>
          <div className={styles["card__header_weather-box"]}>
            <h2 className={styles["card__header_weather-degree"]}>
              {city.data?.main.temp.toFixed(0) > 0 && "+"}
              {city.data?.main.temp.toFixed(0)}°
            </h2>
            <span className={styles["card__header_current-weather"]}>
              {city.data?.weather[0].main}
            </span>
            <br />
            <img src={`https://openweathermap.org/img/w/${city.data?.weather[0].icon}.png`} alt="Weather Icon" width="50" height="50" loading="lazy"/>
          </div>
          <div className={styles["card__header-info"]}>
            <h2 className={styles["card__header_country"]}>{city.name}</h2>
          </div>
        </div>
        <div className={styles["card__body-left"]}>
          <dl className={styles["card__body-left_list"]}>
            <div className={styles["card__body-list_wrap"]}>
              <dt className={styles["card__body-list_item"]}>Feels like</dt>
              <span className={styles["dots"]}></span>
              <dd className={styles["card__body-list_value"]}>
                {city.data?.main.feels_like.toFixed(0) > 0 && "+"}
                {city.data?.main.feels_like.toFixed(0)}°
              </dd>
            </div>
            <div className={styles["card__body-list_wrap"]}>
              <dt className={styles["card__body-list_item"]}>Wind</dt>
              <span className={styles["dots"]}></span>
              <dd className={styles["card__body-list_value"]}>
                {city.data?.wind.speed}
              </dd>
            </div>
            <div className={styles["card__body-list_wrap"]}>
              <dt className={styles["card__body-list_item"]}>Pressure</dt>
              <span className={styles["dots"]}></span>
              <dd className={styles["card__body-list_value"]}>
                {city.data?.main.pressure}
              </dd>
            </div>
            <div className={styles["card__body-list_wrap"]}>
              <dt className={styles["card__body-list_item"]}>Humidity</dt>
              <span className={styles["dots"]}></span>
              <dd className={styles["card__body-list_value"]}>
                {city.data?.main.humidity}
              </dd>
            </div>
            <div className={styles["card__body-list_wrap"]}>
              <dt className={styles["card__body-list_item"]}>Visibility</dt>
              <span className={styles["dots"]}></span>
              <dd className={styles["card__body-list_value"]}>
                {city.data?.visibility}
              </dd>
            </div>
          </dl>
        </div>
        <div className={styles["card__body-right"]}></div>
        <div className={styles["card__body-footer"]}></div>
      </div>
    </>
  );
}

export default WeatherCard;
// {single && (
//   <button onClick={saveCity}>Save {cities.find((savedCity) => savedCity.id === city.id) && "(Saved!)"}</button>
// )}
// {!single && (
//   <button onClick={()=> history.push(`/city/${city.id}`)}>See more info</button>
// )}
