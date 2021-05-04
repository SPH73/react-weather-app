import React from "react";
import "./App.css";
import Forecast from "./components/Forecast/Forecast";
import Logo from "./components/Logo/Logo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1>React Weather App</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Page created by Sue Holder using create-react-app and
        <a
          href="https://rapidapi.com/blog/weather-app-react/"
          target="_blank"
          rel="noopener noreferrer"
        >
          RapidAPI
        </a>
      </footer>
    </div>
  );
}
export default App;
