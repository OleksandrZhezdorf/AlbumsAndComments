import React, { Component } from 'react';
import { Input } from "semantic-ui-react";

class SearchInput extends Component {
  render() {
    return (
      <Input {...this.props} icon='search'  />
    )
  }
}

export default SearchInput;
