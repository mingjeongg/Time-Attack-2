import React from "react";
import { useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";

const Detail = () => {
  const [searchParams] = useSearchParams();
  const detailId = searchParams.get("id");

  {
    const detailCard = MOCK_DATA.map((data) => {
      return data.id === detailId;
    });

    return (
      <div>
        <img src={detailCard.img_url} />
        <h5>{detailCard.korean_name.name}</h5>
        <p>id: {detailCard.id}</p>
      </div>
    );
  }
};

export default Detail;
