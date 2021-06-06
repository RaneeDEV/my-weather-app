import React, { useState } from "react";

import { getCurrentWeatherByName } from "../../api/oswm";
import { useCities } from "./../../hooks/useWeatherData";

export default function SearchForm() {
  const [, dispatchCities] = useCities();
  const [query, setQuery] = useState("");
  async function searchCity(event) {
    event.preventDefault();
    console.log(query);
    try {
      const data = await getCurrentWeatherByName(query);
      dispatchCities({ type: "ADD_CITY", payload: data });
      const newCity = { id: data.id, name: data.name, country: data.sys.country };
      const savedCities = JSON.parse(window.localStorage.cities);
      window.localStorage.cities = JSON.stringify([...savedCities, newCity]);
      console.log("dispatch ADD_CITY");
      setQuery("");
    } catch (error) {
      console.warn(error);
    }
  }
  return (
    <>
      <form onSubmit={searchCity}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          name="search"
          placeholder="Search city"
          required
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
