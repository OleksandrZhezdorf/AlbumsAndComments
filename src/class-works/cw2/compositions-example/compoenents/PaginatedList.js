import React, { Component } from 'react';
import List from "./List";

class PaginatedList extends Component {
  render() {
    return (
      <div className='paginated-list'>
        <List list={[1,2,3,4]} renderItem={item => <div>{item}</div>}/>
        <br/><br/>
        Page 1 of 10
      </div>
    );
  }
}

export default PaginatedList;
