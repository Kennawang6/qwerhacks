import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar.js'
import Results from './components/Results.js'
//import firebase from './lib/firebase.js';
import './Search.js'
// import * as data from '../moviedb.json'
const data = require('./moviedb.json')

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results: [],
      movies: data
    };
    // let url = `https://api.themoviedb.org/3/keyword/158718/movies?api_key=3d29d36b5a70ebd4d28cc373f7c2dd12&language=en-US&include_adult=false&page=2`;
    // fetch(url).then(resp => {
    //   return resp.json();
    // }).then(resp => {
    //   console.log(resp);
    // })
  }

  doSearch = filters => {
    //if (filters.length !== 0){
      let results = [];
      let movies = this.state.movies.results
      //filters.forEach((element, i) => {
        //results.push(element)
      //})
      movies.forEach((element, i) => {
        results.push({
          title: element.title,
          popularity: element.popularity,
          poster: element.poster_path,
          overview: element.overview,
          rating: element.vote_average,
          date: element.release_date
        })
      })
      this.setState({results: results})
    //}
  }

  render = () => {
      return (
          <div className="app-container" background="bubbles.png">
            <SearchBar
              onSearch={this.doSearch}
            />
            <Results results={this.state.results}/>
            <div id='results'></div>
          </div>
      );
  }
}

export default App;
