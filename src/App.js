import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Search from "./Search";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />

      <footer>
        Open-source code by{" "}
        <a href="https://github.com/spacemapache/weather-app-react">
          Isabelle Ang
        </a>
      </footer>
    </div>
  );
}
