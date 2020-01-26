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
    this.unsubscribe = this.db.collection("titles")
    .orderBy("start-year", "desc").limit(10).onSnapshot((collection) => {
      let resultsList = [];
      collection.forEach(function(doc){
        let result = doc.data();
        let newResult = {
          title: result['primary-title'],
          genre: result.genre,
          year: result['start-year'],
          duration: result['runtime-minutes']
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
