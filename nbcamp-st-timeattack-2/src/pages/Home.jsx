import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navi = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navi("/dex");
        }}
      >
        시작
      </button>
    </div>
  );
};

export default Home;
