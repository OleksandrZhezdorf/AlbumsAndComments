import React, { Component } from 'react';

class List extends Component {
  render() {
    const { list, renderItem } = this.props;
    return (
      <div className='list'>
        {list.map(data => renderItem(data))}
      </div>
    )
  }
}

export default List;
