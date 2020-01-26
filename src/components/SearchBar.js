import React from 'react';
import Filter from './Filter.js'

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filters: []
    };
  }

  add_filter = () => {
  }

  renderFilters = () => {
    if (this.state.filters.length === 0){
      return <div className='filters'></div>
    }
    let filters = []
    this.state.filters.forEach((element, i) => {
      filters.push(
        <Filter
          key={i}
          name={element.name}
          upper={element.upper}
          lower={element.lower}
        />
      );
    })
  }

  render = () => {
    return(
      <div className='Search'>
        <header>This is the search</header>
        <button
          className="add-filter"
          onClick={this.add_filter}
        >Add Filter!
        </button>
        {this.renderFilters()}
      </div>
    );
  }
}

export default SearchBar;
