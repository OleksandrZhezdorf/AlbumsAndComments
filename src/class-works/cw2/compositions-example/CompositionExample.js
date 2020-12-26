import React, { Component } from 'react';
import SearchInput from "./compoenents/SearchInput";
import { Icon } from "semantic-ui-react";
import List from "./compoenents/List";
import SearchableList from "./compoenents/SearchableList";
import PaginatedList from "./compoenents/PaginatedList";

class CompositionExample extends Component {
  render() {
    return (
      <div>
        <SearchableList
          list={['banana', 'apple', 'cucumber']}
          noFoundText='Items have not found!'
          renderItem={item => (
            <div className='item-with-icon'>
              <Icon name={item} />
              {item}
            </div>
          )}
        >
          This is description text
        </SearchableList>
        {/*<PaginatedList />*/}
        {/*<List list={['banana', 'apple', 'cucumber']} renderItem={item => (*/}
        {/*  <div className='item-with-icon'>*/}
        {/*    <Icon name={item} />*/}
        {/*    {item}*/}
        {/*  </div>*/}
        {/*)} />*/}
        {/*<br/><br/>*/}
        {/*<List list={['Test1', 'Test2', 'Test3']} renderItem={item => <div><strong>{item}</strong> </div>} />*/}
      </div>
    );
  }
}

export default CompositionExample;
