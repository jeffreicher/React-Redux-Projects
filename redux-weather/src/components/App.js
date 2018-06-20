import React, { Component } from 'react';
import SearchBar from '../container/search_bar';
import WeatherList from '../container/weather_list';
import Header from './header';
import '../assets/css/styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <SearchBar />
          <WeatherList />
        </div>         
      </div>
     
    );
  };
};

export default App;
