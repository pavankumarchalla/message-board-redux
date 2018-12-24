import React, { Component } from "react";

class PublicForm extends Component {
  state = {
    inputText: ""
  };

  handleChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addPost(this.state.inputText);
    this.setState({
      inputText: ""
    });
  };

  render() {
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.inputText}
          className="form-control"
        />
        <button onClick={this.handleSubmit} className="btn btn-primary">
          Post
        </button>
      </div>
    );
  }
}

export default PublicForm;
