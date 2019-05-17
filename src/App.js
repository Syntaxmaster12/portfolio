import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome/Welcome';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Navigation from './components/Navigation/Navigation';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Welcome />
        <Skills />
        <About />
        <Contact />
      </div>
    );
  }
}

export default App;
