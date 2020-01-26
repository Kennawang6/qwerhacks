import React from 'react';
import Filter from './Filter.js'

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filters: [{lower: 0,
      upper: 0,
      name: "choose filter"}]
    };
  }

  createFilter = () => {
    let filters = this.state.filters;
    let newFilter = {
      lower: 0,
      upper: 0,
      name: "choose filter"
    }
    filters.push(newFilter);
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
            name={element.name}
            upper={element.upper}
            lower={element.lower}
          />
        );
      });
      return (
          <div>{filters}</div>
      );
    }
  }

  render = () => {
    return(
      <div className='Search'>
        <header>This is the search</header>
        <button
          className="add-filter"
          onClick={this.createFilter}
        >Add Filter!
        </button>
        {this.renderFilters()}
      </div>
    );
  }
}

export default SearchBar;
