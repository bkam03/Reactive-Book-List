import React, { Component } from 'react';
import Book from '../../components/Book.js';

class BookList extends Component {

  render(){
    let books = this.props.books;
    console.log( this.props.filter);
    return (
      <ul className="BookListContainer">
        {
          /*books.map(( book ) => {
            return(
              <Book
                title={book.title}
                author={book.author}
                key={book._id}
              />
            )
          } )*/
          books
            .filter( book => {
              if( this.props.filter ){
                let matchAuthor = book.author.toLowerCase().indexOf(this.props.filter.toLowerCase()) > -1;
                let matchTitle = book.title.toLowerCase().indexOf(this.props.filter.toLowerCase()) > -1;
                return matchAuthor || matchTitle;
              }else {
                return book;
              }
            } )
            .map( book => {
              return(
                <Book
                  title={book.title}
                  author={book.author}
                  key={book._id}
                />
              );
            } )
        }
      </ul>
    );
  }
};

export default BookList;