import React, { useState, useEffect } from "react";
import axios from "axios";
import CardsDiv from "./components/CardsDiv";
import "./App.css";
import { Toggle } from "./components/DMToggle";

const App = () => {
  const [dataArray, setDataArray] = useState([{}]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        setDataArray(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Toggle
        mode="plDarkMode"
        initialValue={false}
        cssClass="dark-mode"
        content="Dark Mode"
      />
      <h1 className="Header">Women's World Cup players</h1>
      <p>
        Ranked by search interest from Google Trends, June-July 2019, worldwide.
      </p>
      <CardsDiv data={dataArray} />
    </div>
  );
};

export default App;
