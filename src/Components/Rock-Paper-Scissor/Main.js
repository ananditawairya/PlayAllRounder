import React, { useState } from "react";
import scissor from "../../Assets/scissor.JPG";
import paper from "../../Assets/paper.JPG";
import rock from "../../Assets/rock.JPG";
import "./Main.css";

function Main(props) {
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [isRockSelected, setIsRockSelected] = useState(false);
  const [isPaperSelected, setIsPaperSelected] = useState(false);
  const [isScissorSelected, setIsScissorSelected] = useState(false);
  const [message, setMessage] = useState("");

  const handleSelection = (selectedVal, props) => {
    setIsOptionSelected(true);
    const seed = Math.ceil(Math.random() * 3);
    console.log(selectedVal, seed);
    if (selectedVal === seed) {
      setMessage("Draw!!");
      if (selectedVal === 1) setIsRockSelected(true);
      else if (selectedVal === 2) setIsPaperSelected(true);
      else setIsScissorSelected(true);
    } else if (selectedVal === 1 && seed === 2) {
      setIsRockSelected(true);
      setIsPaperSelected(true);
      props.incrementScore2();
      setMessage("Computer wins");
    } else if (selectedVal === 2 && seed === 1) {
      setIsRockSelected(true);
      setIsPaperSelected(true);
      props.incrementScore1();
      setMessage("Player 1 wins");
    } else if (selectedVal === 2 && seed === 3) {
      setIsPaperSelected(true);
      setIsScissorSelected(true);
      props.incrementScore2();
      setMessage("Computer wins");
    } else if (selectedVal === 3 && seed === 2) {
      setIsPaperSelected(true);
      setIsScissorSelected(true);
      setMessage("Player 1 wins");
      props.incrementScore1();
    } else if (selectedVal === 3 && seed === 1) {
      setIsScissorSelected(true);
      setIsRockSelected(true);
      setMessage("Computer wins");
      props.incrementScore2();
    } else if (selectedVal === 1 && seed === 3) {
      setIsScissorSelected(true);
      setIsRockSelected(true);
      setMessage("Player 1 wins");
      props.incrementScore1();
    } else {
      setMessage("select a valid input");
    }
  };

  const playAgain = () => {
    setIsOptionSelected(false);
    setIsRockSelected(false);
    setIsPaperSelected(false);
    setIsScissorSelected(false);
    setMessage("");
    console.log("ghjkl", isOptionSelected);
  };
  return (
    <div className="main-parent">
      <div className="selection-container">
        {!isOptionSelected ? (
          <div className="image-container">
            <img
              src={rock}
              alt="rock"
              className="initial-style rock"
              onClick={() => handleSelection(1, props)}
            />
            <img
              src={paper}
              alt="paper"
              className="initial-style paper"
              onClick={() => handleSelection(2, props)}
            />
            <img
              src={scissor}
              alt="scissor"
              className="initial-style scissor"
              onClick={() => handleSelection(3, props)}
            />
          </div>
        ) : (
          <div className="image-container">
            <img
              src={rock}
              alt="rock"
              className={`${
                isRockSelected ? "rock selected-image" : "selected-image hidden"
              }`}
            />

            <img
              src={paper}
              alt="paper"
              className={`${
                isPaperSelected
                  ? "paper selected-image"
                  : "selected-image hidden"
              }`}
            />

            <img
              src={scissor}
              alt="scissor"
              className={`${
                isScissorSelected
                  ? "scissor selected-image"
                  : "selected-image hidden"
              }`}
            />
          </div>
        )}
      </div>

      <div className="result-container">
        {isOptionSelected && (
          <button onClick={playAgain} className="play-again">
            Play Again
          </button>
        )}
        <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default Main;
