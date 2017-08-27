import React, { Component } from 'react';

import Book from '../../components/Book.js'

class BookList extends Component {

  render(){
    let books = this.props.books;
    console.log( 'booklist');
    return (
      <ul className="BookListContainer">
        {
          books.map(( book ) => {
            return(
              <Book
                title={book.title}
                author={book.author}
                key={book._id}
              />
            )
        } )
        }
      </ul>
    );
  }
};

export default BookList;