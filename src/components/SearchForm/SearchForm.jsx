import React, { useState } from "react";
import "./SearchForm.css";
import { useHistory } from "react-router-dom";

export default function SearchForm() {
  const history = useHistory()
  const [query, setQuery] = useState("");
  async function searchCity(event) {
    event.preventDefault();
    console.log(query);
    setQuery("");
    history.push(`/city/${query.trim()}`)
  }
  return (
    <>
      <form onSubmit={searchCity}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          name="search"
          className="search__input"
          placeholder="Search City"
          required
        />
        <button type="submit" className="search__btn"><i class="fas fa-search"></i></button>
      </form>
    </>
  );
}
