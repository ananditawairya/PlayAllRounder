import React, { useState, useEffect } from "react";
import Square from "./Square";
import "./Board.css";
import { calculateWinner } from "../../../Helpers/functions/calculateWinner";

function Board(props) {
  console.log("Board Child");
  const [boardValues, setBoardValues] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(boardValues);
  const { processWinnerCallback } = props;
  useEffect(() => {
    if (winner !== null) {
      console.log("winner---13");
      processWinnerCallback(winner);
    }
  }, [winner]);

  const handleClick = (i) => {
    const boardDataCopy = [...boardValues];
    if (winner || boardDataCopy[i]) {
      return;
    }
    boardDataCopy[i] = xIsNext ? "X" : "O";
    setBoardValues(boardDataCopy);
    setXIsNext(!xIsNext);
  };
  const renderRow = () => {
    return boardValues.map((boardValue, i) => (
      <Square key={i} value={boardValue} onClick={() => handleClick(i)} />
    ));
  };

  const startGame = () => {
    setBoardValues(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <>
      <div className="board">{renderRow()}</div>
      <p className="display-details">
        {winner
          ? "Winner is: " + winner
          : "Next Player is: " + (xIsNext ? "X" : "O")}
      </p>
      <button className="start-button" onClick={startGame}>
        Start Game
      </button>
    </>
  );
}

export default Board;
