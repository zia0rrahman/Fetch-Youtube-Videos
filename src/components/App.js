import React, { Component } from 'react';
import './App.css';
import Youtube from './Youtube/Youtube'
import Header from './Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Youtube />
      </div>
    );
  }
}

export default App;
