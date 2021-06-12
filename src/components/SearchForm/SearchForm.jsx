import React, { useState } from "react";
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
          placeholder="Search city"
          required
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}
