import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

import BookList from '../../components/BookListAppTitle';

class App extends Component {
  render() {
    return (
      <div>
        <p>List all book titles here</p>
        <BookList />
        <p>input text field to filter books</p>
        <p>form to add books to db.</p>
      </div>
    );
  }
}

export default App;
/*
<div> //this is the part like google search
  <input type="text" onChange={this.handleChange.bind(this)} />
  <p>{this.state.text}</p>

  <h3>Is Clicked? {this.state.isClicked}</h3> //displays true/false changes when button clicked.
  <button onClick={this.handleClick.bind(this)}>Click Me!</button>

  <br />
  <br />
  <div className="movie-form"> //form to add new movie
    <input
      type="text"
      name="title"
      placeholder="Movie Title"
      onChange={this.handleTitleChange.bind(this)}
      />
    <br />
    <input
      type="text"
      name="year"
      placeholder="Movie Year"
      onChange={this.handleYearChange.bind(this)}
    />
    <br />
    <button onClick={this.handleMovieSubmit.bind(this)}>Submit Movie</button>
  </div>

  <br /> //this is the part that listed each movie.
  <MovieList
    movies={this.state.movies}
  />
</div>
*/