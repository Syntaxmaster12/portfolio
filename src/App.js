import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';
import About from './components/About/About'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Welcome />
        <About />
      </div>
    );
  }
}

export default App;
