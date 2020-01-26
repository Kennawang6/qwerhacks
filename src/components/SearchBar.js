import React from 'react';
import Filter from './Filter.js'

//BIG TODO CSS

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filters: [],
      options: ["popularity", "adult", "year", "vote average"] // TODO determine options
    };
  }

  createFilter = () => {
    let filters = this.state.filters;
    let newFilter = {
      lower: 0,
      upper: 0
    }
    filters.push(newFilter);
    this.setState({filters: filters});
  }

  removeFilter = i => {
    let filters = this.state.filters;
    filters.splice(i, 1);
    this.setState({filters: filters});
  }

  renderFilters = () => {
    if (this.state.filters.length === 0){
      return(<div className='filters'></div>);
    } else {
      let filters = [];
      this.state.filters.forEach((element, i) => {
        filters.push(
          <Filter
            key={i}
            remove={this.removeFilter}
            options={this.state.options}
          />
        );
      });
      return (
          <div>{filters}</div>
      );
    }
  }

  onSearch = filters => () => {
    this.props.onSearch(filters)
  }

  render = () => {
    return(
      <div className='search-bar'>
        <header>This is the search</header>
        <button
          className="add-filter"
          onClick={this.createFilter}
        >Add Filter!</button>
        {this.renderFilters()}
        <button
          onClick={this.onSearch(this.state.filters)}
        >Find Movies</button>
      </div>
    );
  }
}

export default SearchBar;
