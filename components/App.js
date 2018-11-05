import React, { Component } from "react";
import Controls from "./Controls";

class App extends Component {
  state = {
    video_url: "",
    message: ""
  };

  handlePlayButton = () => {
    this.setState({
      message: "Playing..."
    });
  };
  handleRwButton = () => {};
  handleFfButton = () => {};

  render() {
    return (
      <div className="row">
        <Controls
          message={this.state.message}
          playButton={this.handlePlayButton}
          rwButton={this.handleRwButton}
          ffButton={this.handleFfButton}
        />
      </div>
    );
  }
}

export default App;
