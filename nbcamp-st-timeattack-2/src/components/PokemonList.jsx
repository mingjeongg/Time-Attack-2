import React, { useContext, useState } from "react";
import MOCK_DATA from "../mock";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../App";

const PokemonList = () => {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);
  const navi = useNavigate();
  return (
    <div style={{ display: "flex" }}>
      <h1>리스트</h1>

      {MOCK_DATA.map((data) => {
        return (
          <div key={data.id}>
            <div
              onClick={() => {
                navi(`detail?id=${data.id}`);
              }}
            >
              <img src={data.img_url} />
              <h5>{data.korean_name.name}</h5>
              <p>id: {data.id}</p>
            </div>
            <button
              onClick={() => {
                setSelectedPokemon([...selectedPokemon, data]);
              }}
            >
              추가
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonList;
