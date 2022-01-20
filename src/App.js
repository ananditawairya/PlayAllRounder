import RockPaperScissor from "./Components/Rock-Paper-Scissor/App";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
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
      </Routes>
    </div>
  );
}

export default App;
