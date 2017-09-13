import React, { Component } from 'react';
import EarthquakeInfo from './EarthquakeInfo';
import Earthquakelist from './EarthquakeList';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="title">
              <div className="my-header">EarthQuakes!</div>
          </div>
          <EarthquakeInfo />
          <Earthquakelist />
          <img  className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
