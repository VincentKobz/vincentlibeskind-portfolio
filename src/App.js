import React, { Component } from 'react';
import Header from './pages/Header';
import Project from './pages/Project';
import Contact from './pages/Contact';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Project />
        <Contact />
      </div>
    );
  }
}

export default App;
