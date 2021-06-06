import "./App.css";
import React, { useEffect } from 'react'

import CitiesList from "./components/CitiesList/CitiesList";
import SearchForm from './components/SearchForm/SearchForm';
import { useCities } from './hooks/useWeatherData';

function App() {
  return (
    <>
      <div className="container">
        <SearchForm></SearchForm>
        <CitiesList />
      </div>
    </>
  );
}

export default App;
