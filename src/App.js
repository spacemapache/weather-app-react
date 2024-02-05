import "./App.css";

import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <Search />
      <footer>
        Open-source code by{" "}
        <a href="https://github.com/spacemapache">Isabelle Ang</a>
      </footer>
    </div>
  );
}
