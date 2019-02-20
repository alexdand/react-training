import React, { Component } from "react";

class AuthorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageUrl: ""
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
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
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onFieldChange}
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Name</label>
          <input type="text" name="imageUrl" value={this.state.imageUrl} />
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
      <AuthorForm onAddAuthor={props.onAddAuthor} />
    </div>
  );
}

export default AddAuthorForm;
