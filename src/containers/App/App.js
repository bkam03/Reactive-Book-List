import React, { Component } from 'react';
import './App.css';

import BookListAppTitle from '../../components/BookListAppTitle';
import BookList from '../BookList';
import { getBooksFromFakeXHR, addBookToFakeXHR } from '../../lib/books.db.js'
import BookFilterInput from '../../components/BookFilterInput';
import NewBookForm from '../NewBookForm';


class App extends Component {
  constructor(){
    super();
    this.state= {
      books: [],
      bookFilterText: ''//,
/*      bookTitle: '',
      bookAuthor: ''*/
    };
  }

  componentWillMount() {
    getBooksFromFakeXHR()
      .then( (books) => {
        console.log( books );
        this.setState({
          books: books
        });
      } )
      .catch( (err) => {
        console.log( 'getbooks error', err );
      } );
  }

  handleFilterInputChange(e) {
    this.setState({
      bookFilterText: e.target.value
    });
  }


  addBookToDatabase(book){

    addBookToFakeXHR(book)
      .then((bookList) => {
        getBooksFromFakeXHR()
          .then( books => {
            this.setState({
              books:  books
            });
          } )
          .catch( err => {
            console.log( err );
          } );
      })
      .catch((err)=>{
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <BookListAppTitle
          title="BookList"
        />

        <p>Filter by author or title</p>
        <BookFilterInput
          filterInputChange={this.handleFilterInputChange.bind(this)}
        />

        <BookList
          filter={this.state.bookFilterText}
          books={this.state.books}
        />


        <h3>Add a Book</h3>
        <NewBookForm
          submitBook={this.addBookToDatabase.bind(this)}
        />
        <br />
        <br />
        <br />

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