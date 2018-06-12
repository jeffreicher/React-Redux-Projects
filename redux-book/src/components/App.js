import React, { Component } from 'react';
// import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';
import BookList from '../containers/book_list';
import BookDetail from '../containers/book-detail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

export default App;
