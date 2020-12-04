import React, { useState } from 'react';
import cardArr from "../data/cardArr.json";
import { getRandomInt } from "../utils/randomizer";
import Card from "./Card";

const Board = () => {
  const [hand, setHand] = useState(cardArr[getRandomInt(0, 51)])

  return (
    <div className="board">
      <div className="hand">
        <Card name={cardArr[getRandomInt(0, 51)]} />
        <Card name={cardArr[getRandomInt(0, 51)]} />
        <Card name={cardArr[getRandomInt(0, 51)]} />
        <Card name={cardArr[getRandomInt(0, 51)]} />
        <Card name={cardArr[getRandomInt(0, 51)]} />
      </div>
      


      <button onClick={() => setHand(cardArr[getRandomInt(0, 51)])} >Refresh</button>
    </div>
  )
}

export default Board;