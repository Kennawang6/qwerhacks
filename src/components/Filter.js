import React from 'react';

class Filter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lower: 0,
      upper: 0,
      name: "choose filter"
    }
  }

  handleLowerChange = e => {
    this.setState({lower: e.target.value})
  }

  handleUpperChange = e => {
    this.setState({upper: e.target.value})
  }

    render(){
        return (
            <div className="filter">
                <div className="filter-item">
                    <p><b>{this.props.name}</b> </p>
                    <button className="dropbtn">name</button>
                    <input
                      className="text-input"
                      type="number"
                      value={this.state.lower}
                      onChange={this.handleLowerChange}
                    /> to
                    <input
                      className="text-input"
                      type="number"
                      value={this.state.upper}
                      onChange={this.handleUpperChange}
                    />
                    <button className="remove">remove</button>
                </div>
            </div>
        );
    }
}

export default Filter;
