import React, { Component } from "react";

class AuthorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageUrl: "",
      books: [],
      bookTemp: ""
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onAddBook = this.onAddBook.bind(this);
  }

  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onAddBook() {
    this.setState(function(prevState) {
      return {
        books: prevState.books.concat([this.state.bookTemp]),
        bookTemp: ""
      };
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addAuthor(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onFieldChange}
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image Url: </label>
          <input
            type="text"
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.onFieldChange}
          />
        </div>
        <div>
          {this.state.books.map((book, idx) => (
            <p key={idx}>{book}</p>
          ))}
        </div>
        <div>
          <label htmlFor="books">Book: </label>
          <input
            type="text"
            name="bookTemp"
            value={this.state.bookTemp}
            onChange={this.onFieldChange}
          />
          <button type="button" onClick={this.onAddBook}>
            +
          </button>
        </div>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

function AddAuthorForm(props) {
  return (
    <div className="addAuthorForm">
      <h1>Add Author Form</h1>
      <AuthorForm addAuthor={props.onAddAuthor} />
    </div>
  );
}

export default AddAuthorForm;
