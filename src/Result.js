import classNames from "classnames";
import React, { useContext, useEffect, useState } from "react";
import Chosen from "./Chosen";
import { RpsContext } from "./Contexts/RpsContext";
import "./styles/result.css";

function Result() {
  const { choice, rand, score, setScore, setShowR } = useContext(RpsContext);
  const [res, setRes] = useState("");

  function result() {
    if (choice === rand) {
      return "draw";
    } else if (
      (choice === "rock" && rand === "scissors") ||
      (choice === "paper" && rand === "rock") ||
      (choice === "scissors" && rand === "paper")
    ) {
      return "win";
    } else {
      return "loss";
    }
  }

  useEffect(() => {
    setRes(result());
  }, [choice, rand]);

  useEffect(() => {
    if (res === "win") {
      setScore(score + 1);
    }
  }, [res]);

  return (
    <>
      <div className="result-container-dsk">
        <div className="side side-left">
          <div className="who-pick upper">You picked</div>
          <div className="chosen-coin">
            <Chosen pick={choice} effect={res === "win" ? "true" : ""} />
            {/* <div className='shadow'></div> */}
          </div>
        </div>
        <div className="result-section result-section-desktop">
          <div className="the-result upper show-res">
            {res === "win" ? "You win" : res === "loss" ? "You lose" : "draw"}
          </div>
          <div
            className={classNames("result-button upper", {
              red: res === "loss",
            })}
            onClick={() => setShowR(false)}
          >
            Play again
          </div>
        </div>
        <div className="side side-right">
          <div className="who-pick upper">The house picked</div>
          <div className="chosen-coin">
            <Chosen pick={rand} effect={res === "loss" ? "true" : ""} />
          </div>
        </div>
      </div>
      <div className="result-section result-section-mobile">
        <div className="the-result upper show-res">
          {res === "win" ? "You win" : res === "loss" ? "You lose" : "draw"}
        </div>
        <div
          className={classNames("result-button upper", {
            red: res === "loss",
          })}
          onClick={() => setShowR(false)}
        >
          Play again
        </div>
      </div>
    </>
  );
}

export default Result;
