import "./App.css";
import React, { useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";

import SearchForm from "./components/SearchForm/SearchForm";
import { useCities } from "./hooks/useWeatherData";
import CitiesListPage from "./pages/CitiesListPage/CitiesListPage";
import CityPage from './pages/CityPage/CityPage';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <Switch>
          <Route exact path="/city/:q">
            <CityPage></CityPage>
          </Route>
          <Route exact path="/">
            <CitiesListPage></CitiesListPage>
          </Route>
          <Route exact path="/404">
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
