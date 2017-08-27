import React, { Component } from 'react';

class NewBookForm extends Component {
  render(){
    let props = this.props;
    return(
      <div className="book-form">
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          onChange={ props.titleChange }
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="Book Author"
          onChange={ props.authorChange }
        />
        <br />
        <button onClick= {props.submitBook}>Submit Book</button>
      </div>
    );
  };
}

export default NewBookForm;