import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import Detail from "./pages/Detail";

export const PokemonContext = createContext();

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  return (
    <div>
      <PokemonContext.Provider value={{ selectedPokemon, setSelectedPokemon }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dex" element={<Dex />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </PokemonContext.Provider>
    </div>
  );
};

export default App;
