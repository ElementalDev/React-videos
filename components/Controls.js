import React from "react";

const Controls = props => {
  return (
    <div className="controls container col-sm-4">
      <h2 className="buttonMessage">{props.message}</h2>
      <span className="btnCont" onClick={() => props.rwButton()}>
        <i className="fas fa-backward fa-2x backBtn" id="backBtn" />
      </span>
      <span className="btnCont" onClick={() => props.playButton()}>
        <i className="fas fa-play fa-2x playBtn" id="playBtn" />
      </span>
      <span className="btnCont" onClick={() => props.ffButton()}>
        <i className="fas fa-fast-forward fa-2x ffBtn" id="ffBtn" />
      </span>
    </div>
  );
};

export default Controls;
