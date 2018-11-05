import React, { Component } from "react";
import Controls from "./Controls";

class App extends Component {
  state = {
    message: "-- Click a Button --",
    videos: [
      {
        video_url: ""
      },
      {
        video_url: ""
      },
      {
        video_url: ""
      },
      {
        video_url: ""
      }
    ]
  };

  handlePlayButton = () => {
    this.setState({
      message: "Playing..."
    });
  };

  handleRwButton = () => {
    this.setState({
      message: "Back 5s"
    });
  };

  handleFfButton = () => {
    this.setState({
      message: "Forward 5s"
    });
  };

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
