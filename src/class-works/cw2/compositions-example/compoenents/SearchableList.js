import React, { Component } from 'react';
import SearchInput from "./SearchInput";
import List from "./List";

class SearchableList extends Component {
  state = {
    search: ''
  };
  onChangeSearch = e => {
    this.setState({ search: e.target.value })
  };
  render() {
    const { search } = this.state;
    const { list, renderItem, noFoundText, children } = this.props;
    const filteredList = list.filter(item => item.toLowerCase().includes(search.toLowerCase()));
    return (
      <div className='searchable-list'>
        <SearchInput value={search} onChange={this.onChangeSearch} />
        <List
          list={filteredList}
          renderItem={renderItem}
        />
        {filteredList.length === 0 && noFoundText}
        {children}
      </div>
    );
  }
}

export default SearchableList;
