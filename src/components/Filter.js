import React from 'react';

class Filter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lower: 0,
      upper: 0
    }
  }

  handleLowerChange = e => {
    this.setState({lower: e.target.value})
  }

  handleUpperChange = e => {
    this.setState({upper: e.target.value})
  }

  remove = () => this.props.remove(this.props.key)
  // TODO fix order of removal

  getSelector = () => {
    if (this.props.options.length === 0){
      return (
        <div></div>
      );
    }
    let options = [];
    this.props.options.forEach((element, i) => {
      options.push(<option key={element} value={element}>{element}</option>)
    })
    return (
      <div key="TODO-filter">
        <label htmlFor="filter-select">Filter By</label>
        <select name="filter" id="filter-select">{options}</select>
      </div>
    );// TODO how to export selector value if possible
  }

  render(){
    return (
      <div className="filter">
        <div className="filter-item">
          {this.getSelector()}
          <input
            className="filter-low"
            type="number"
            value={this.state.lower}
            onChange={this.handleLowerChange}
          /> to <input
            className="filter-high"
            type="number"
            value={this.state.upper}
            onChange={this.handleUpperChange}
          />
          <button className="filter-remove" onClick={this.remove}>remove</button>
        </div>
      </div>
    );
  }
}

export default Filter;
