import "./App.css";

import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Search />
      <br />
      <footer>
        Open-source code by{" "}
        <a href="https://github.com/spacemapache/weather-app-react">
          Isabelle Ang
        </a>
      </footer>
    </div>
  );
}
