import React, { useState } from "react";
import { data } from "./data";
import "./App.css";

const App = () => {
  const [globalState, setGlobalState] = useState({
    userLevel: 1,
    soragNumber: 0,
    ball: 0,
    jogap: "",
  });

  const handleClick = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      if (
        Number(e.target.value) ===
        data[globalState.userLevel][globalState.soragNumber].jogap
      ) {
        if (globalState.soragNumber === 9) {
          setGlobalState({
            ...globalState,
            userLevel: globalState.userLevel + 1,
            soragNumber: 0,
            jogap: "",
            ball: globalState.ball + 1,
          });
        } else {
          setGlobalState({
            ...globalState,
            soragNumber: globalState.soragNumber + 1,
            ball: globalState.ball + 1,
            jogap: "",
          });
        }
      }
    }
  };

  return (
    <div className="container">
      <div className="game">
        <div className="userInfo">
          <span>user Level: {globalState.userLevel}</span>
          <span>User Ball: {globalState.ball}</span>
        </div>
        <div>
          <span>
            {data[globalState.userLevel][globalState.soragNumber].sorag}
          </span>
          <input
            className="input__jogap"
            type="text"
            value={globalState.jogap}
            placeholder=""
            onKeyDown={(e) => handleClick(e)}
            onChange={(e) => {
              setGlobalState({ ...globalState, jogap: e.target.value });
            }}
          />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default App;
