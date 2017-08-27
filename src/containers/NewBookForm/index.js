import React, { Component } from 'react';

class NewBookForm extends Component {
  render(){

    return(
      <div className="book-form">
        <input
          type="text"
          name="title"
          placeholder="Book Title"

        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
        />
        <br />
        <button>Submit Book</button>
      </div>
    );
  };
}

export default NewBookForm;