import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar.js'
import firebase from './lib/firebase.js';
import './Search.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render = () => {
      return (
          <div className="app-container">
            <img src="https://i.imgur.com/ew9MqKP.png" alt="text"/>
            <SearchBar />
          </div>
      );
  }
}

export default App;
