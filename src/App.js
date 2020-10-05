import React, { useState } from "react";
import "./App.css";
import CarSelector from "./components/CarSelector";
import Header from "./components/Header";
import TwoRowContentBox from "./components/TwoRowContentBox";
import SelectedCarContext from "./context/SelectedCarContext";

const App = () => {
  const [selectedData, setSelectedData] = useState(null);

  return (
    <SelectedCarContext.Provider value={{ selectedData, setSelectedData }}>
      <div className="App">
        <Header />
        <h2>Hitta din nästa drömbil</h2>
        <CarSelector />
        <TwoRowContentBox />
      </div>
    </SelectedCarContext.Provider>
  );
};

export default App;
