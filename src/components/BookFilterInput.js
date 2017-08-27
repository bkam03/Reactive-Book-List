import React from 'react';

const BookFilterInput = () => {
  return(
    <div className="book-filter">
      <label htmlFor="book-filter">Filter Books</label>
      <br />
      <input id="book-filter" type="text" />
    </div>
  );
};

export default BookFilterInput;