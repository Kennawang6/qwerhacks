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
            <img src="../images/MacBook-1.png" alt='Welcome to QWER Films'/>
            <SearchBar />
          </div>
      );
  }
}

export default App;
