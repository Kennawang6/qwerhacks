import React from 'react';
// TODO add movie cards

class Results extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  renderResults = () => {
    if (this.props.results.length === 0){
      return(<div className='filters'></div>);
    } else {
      let results = [];
      this.props.results.forEach((element, i) => {
        results.push(
          <p key={element.title}>{element.title}</p>
        );
      });
      return (
          <div>{results}</div>
      );
    }
  }

  render = () => {
    return(
      <div className='results'>
        {this.renderResults()}
      </div>
    );
  }
}

export default Results;
