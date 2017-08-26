import React, { Component } from 'react';
import './App.css';

import BookList from '../../components/BookListAppTitle';

const db = require('../../lib/books.db.js');

class App extends Component {
  componentDidMount() {
    db.getBooksFromFakeXHR()
      .then( ( value ) => {
        console.log( 'then' );
        this.setState({
          bookList: value
        } );
        console.log('state', this.state);
      } )
      .catch( ( err ) => {
        console.log( 'db get err', err );
      });
  }

  render() {
    return (
      <div>
        <p>List all book titles here</p>  get booklist raw to appear here, then in booklist file.  then do individual book div rendering in that file.
        <BookList /> //need props here, get from database.
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