import React, { Component } from "react";

class Controls extends Component {
  stats = {
    message: ""
  };

  render() {
    return (
      <div className="controls">
        <span id="btnCont">
          <i className="fas fa-backward fa-2x backBtn" id="backBtn" />
        </span>
        <span id="btnCont">
          <i className="fas fa-play fa-2x playBtn" id="playBtn" />
        </span>
        <span id="btnCont">
          <i className="fas fa-fast-forward fa-2x ffBtn" id="ffBtn" />
        </span>
      </div>
    );
  }
}

export default Controls;
