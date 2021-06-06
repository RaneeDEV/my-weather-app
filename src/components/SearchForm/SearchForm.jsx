import React, { useState } from "react";
import "./SearchForm.css";

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
      <form onSubmit={searchCity} className="search-form">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          name="search"
          className="search-input"
          placeholder="Search city"
          required
        />
        <button type="submit" className="search-btn"><i class="fas fa-search"></i></button>
      </form>
    </>
  );
}
