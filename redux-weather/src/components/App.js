import React, { Component } from 'react';
import SearchBar from '../container/search_bar';
import WeatherList from '../container/weather_list';
import Header from './header';
import '../assets/css/styles.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <SearchBar />
        <WeatherList />
      </div>      
    );
  };
};

export default App;
