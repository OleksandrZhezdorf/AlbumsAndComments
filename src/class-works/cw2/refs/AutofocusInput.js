import React, { Component } from 'react';

class AutofocusInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <input ref={this.inputRef} type="text" {...this.props} />
    );
  }
}

export default AutofocusInput;
