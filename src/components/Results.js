import React from 'react';
import "./Results.css";
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
          <div className="movie-card" key={i}>
            <img className="poster" src={"http://image.tmdb.org/t/p/w200".concat(element.poster)} alt="movie thumbnail"/>
            <h1>{element.title}</h1>
            <p>Released {element.date}</p>
            <p>{element.popularity} popularity</p>
            <p>User voted rating: {element.rating}</p>
            <p>{element.overview}</p>
          </div>
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
