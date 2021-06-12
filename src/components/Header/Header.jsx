import SearchForm from "./../SearchForm/SearchForm";
import { useHistory } from "react-router-dom";
import "./Header.css";
export default function Header() {
  const history = useHistory();
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <a href="/" className="logo">
              Weather App
            </a>
            <div className="header-nav">
              <SearchForm></SearchForm>
              <button onClick={() => history.push("/")}>Main</button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
