import "./App.css";
import Main from "./Main";
import Popup from "../../../Helpers/components/Popup";
import RockPaperScissor from "../../../Assets/Rock-paper-scissors-ins.jpg";
import React, { useState } from "react";
function App() {
  const [isPopupOpen, setPopupOpenState] = useState(false);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const handleToggle = () => {
    console.log(isPopupOpen);
    setPopupOpenState(!isPopupOpen);
  };

  const incrementPlayerScore = () => {
    setScore1(score1 + 1);
  };

  const incrementComputerScore = () => {
    setScore2(score2 + 1);
  };

  const title = "Rock-Paper-Scissor";
  const content =
    "This is a two player game in which the players select either rock paper or scissor using their hands. The rules are-";
  return (
    <div className="Game1">
      <header className="Game1-header">
        <div className="nav-container">
          <div className="score-container">
            <h4 className="score-title">Player's score</h4>
            <h1>{score1}</h1>
          </div>
          <h2 className="title">Rock Paper Scissors</h2>
          <div className="score-container">
            <h4 className="score-title">Computer's Score</h4>
            <h1>{score2}</h1>
          </div>
        </div>
      </header>
      <Main
        incrementScore1={incrementPlayerScore}
        incrementScore2={incrementComputerScore}
      />
      {/* <Instruction /> */}
      <button className="instruction-button" onClick={handleToggle}>
        Read
      </button>
      {isPopupOpen && (
        <Popup
          title={title}
          content={content}
          image={RockPaperScissor}
          className="popup"
          handleToggle={handleToggle}
        />
      )}
    </div>
  );
}

export default App;
