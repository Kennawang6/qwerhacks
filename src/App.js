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
              <header className="header-text">the hive</header>
              <image src="https://i.imgur.com/ew9MqKP.png"></image>
              <p>find out what's all the buzz!</p>
              <hr />
              <div className="message-box">
                  <input
                      className="text-input"
                      type="text"
                      value={this.state.author}
                      onChange={this.handleAuthorChange}
                  />
                  <input
                      className="text-input"
                      type="text"
                      value={this.state.message}
                      onChange={this.handleMessageChange}
                  />
                  <button
                    className="send-button"
                    onClick={this.createMessage}
                  >
                      Send Message
                  </button>
              </div>
              {this.renderMessages()}
          </div>
      );
  }
}

export default App;
