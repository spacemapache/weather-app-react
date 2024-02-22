import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Los Angeles" />

      <footer>
        Open-source code by{" "}
        <a href="https://github.com/spacemapache/weather-app-react">
          Isabelle Ang
        </a>
      </footer>
    </div>
  );
}
