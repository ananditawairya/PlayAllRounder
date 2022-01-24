import RockPaperScissor from "./Components/Rock-Paper-Scissor/components/App";
import TicTacToe from "./Components/TicTacToe/components/App";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          exact
          path="/rock-paper-scissor"
          element={<RockPaperScissor />}
        />
        <Route exact path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="*" element={<h1>Data not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
