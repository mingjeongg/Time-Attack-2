import React, { useContext, useState } from "react";
import { PokemonContext } from "../App";

const Dashboard = () => {
  const { selectedPokemon, setSelectedPokemon } = useContext(PokemonContext);

  const deleteCard = (a) => {
    const undeletedCard = selectedPokemon.filter((card) => {
      return a !== card.id;
    });
    setSelectedPokemon(undeletedCard);
  };

  return (
    <div style={{ display: "flex" }}>
      <h1>대시보드</h1>
      {selectedPokemon.map((card) => {
        // return (
        if (selectedPokemon.length > 6) {
          //무한 alert 문제
          return alert("6개 까지만");
        }

        const dataId = selectedPokemon.map((pokemon) => {
          return pokemon.id;
        });
        console.log(dataId);

        if (card.id === dataId) {
          alert("중복은 안돼");
        } else {
          return (
            <div key={card.id}>
              <img src={card.img_url} />
              <h5>{card.korean_name.name}</h5>
              <p>id: {card.id}</p>
              <button onClick={() => deleteCard(card.id)}>삭제</button>
            </div>
          );
        }
        // )
      })}
    </div>
  );
};

export default Dashboard;
