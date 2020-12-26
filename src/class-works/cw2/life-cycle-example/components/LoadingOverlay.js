import React, { Component } from 'react';
import { Dimmer, Loader } from "semantic-ui-react";

class LoadingOverlay extends Component {
  render() {
    return (
      <div className = "overlay">
        <Dimmer active={this.props.active} inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      </div>
    );
  }
}

export default LoadingOverlay;
