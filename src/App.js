import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar.js'
import firebase from './lib/firebase.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        messages: [],
        author: "Anonymous",
        message: "your message..."
    };
  }
  componentDidMount = () => {
    this.db = firebase.firestore();
    this.unsubscribe = this.db.collection("messages")
    .orderBy("timestamp", "desc").onSnapshot((collection) => {
      let newMessagesList = [];
      collection.forEach(function(doc){
        let message = doc.data();
        let newMessage = {
          author: message.author,
          message: message.message,
          timestamp: message.timestamp
        }
        newMessagesList.push(newMessage);
      });
      this.setState({
        messages: newMessagesList
      });
    });
  }
  componentWillUnmount = () => {
    this.unsubscribe();
  }
  handleAuthorChange = e => {
    this.setState({ author: e.target.value });
  }

  handleMessageChange = e => {
    this.setState({ message: e.target.value });
  }
  createMessage = () => {
    let newMessage = {
      author: this.state.author,
      message: this.state.message,
      timestamp: new Date().getTime()
    };
    let newMessages = this.state.messages;
    newMessages.push(newMessage);
    this.setState({
      messages: newMessages
    });
    this.db.collection("messages").add(newMessage)
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
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
