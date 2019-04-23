import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Welcome from './components/Welcome/Welcome';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Welcome />
      </div>
    );
  }
}

export default App;
