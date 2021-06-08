import CitiesList from "./components/CitiesList/CitiesList";
import SearchForm from './components/SearchForm/SearchForm';
import "./App.css";

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
