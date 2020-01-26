import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar.js'
import Results from './components/Results.js'
import firebase from './lib/firebase.js';
import './Search.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount = () => {
    this.db = firebase.firestore();
    this.unsubscribe = this.db.collection("movies")
    .orderBy("start-year", "desc").limit(10).onSnapshot((collection) => {
      let resultsList = [];
      collection.forEach(function(doc){
        let result = doc.data();
        console.log(result);
        let newResult = {
          title: result.title,
          genre: result.genre
        }
        resultsList.push(newResult);
      });
      this.setState({
        results: resultsList
      });
    });
  }
  componentWillUnmount = () => {
    this.unsubscribe();
  }

  doSearch = filters => {
    if (filters.length !== 0){
      let results = [];
      // TODO have search poll from firebase, not just return filters
      filters.forEach((element, i) => {
        results.push(element)
      })
      this.setState({results: results})
    }
  }

  render = () => {
      return (
          <div className="app-container">
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
