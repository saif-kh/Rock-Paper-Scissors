import React, { useContext } from "react";
import { RpsContext } from "./Contexts/RpsContext";
import "./styles/header.css";

function Header() {
  const { score } = useContext(RpsContext);

  return (
    <div className="header">
      <div className="game-logo">
        <img src="../images/logo.svg" alt="logo" />
      </div>
      <div className="score-board">
        <div className="score-txt upper">score</div>
        <div className="the-score">{score}</div>
      </div>
    </div>
  );
}

export default Header;
