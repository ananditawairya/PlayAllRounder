import "./App.css";
import TicTacToe from "../../../Assets/tic-tac-toe-ins.jpg";
import Popup from "../../../Helpers/components/Popup";
import React, { useState } from "react";
import Board from "./Board";
function App() {
  console.log("App parent");

  const [isPopupOpen, setPopupOpenState] = useState(false);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const processWinnerDetails = (winner) => {
    console.log(winner);
    winner === "X" ? setScore1((s1) => s1 + 1) : setScore2((s2) => s2 + 1);
  };

  const handleToggle = () => {
    console.log(isPopupOpen);
    setPopupOpenState(!isPopupOpen);
  };

  const title = "Tic Tac Toe";
  const content = `The game is played on a grid that's 3 squares by 3 squares.
                   You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares.
                   The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.
                   When all 9 squares are full, the game is over.
  `;
  return (
    <div className="Game1">
      <header className="Game1-header">
        <div className="nav-container">
          <div className="score-container">
            <h4 className="score-title">Player1's score</h4>
            <h1>{score1}</h1>
          </div>
          <h2 className="title">Tic Tac Toe</h2>
          <div className="score-container">
            <h4 className="score-title">Player2's Score</h4>
            <h1>{score2}</h1>
          </div>
        </div>
      </header>
      <div className="board-container">
        <Board processWinnerCallback={processWinnerDetails} />
      </div>
      <button className="instruction-button" onClick={handleToggle}>
        Read
      </button>
      {isPopupOpen && (
        <Popup
          title={title}
          content={content}
          className="popup"
          handleToggle={handleToggle}
          image={TicTacToe}
        />
      )}
    </div>
  );
}

export default App;
