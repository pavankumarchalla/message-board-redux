import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actions from '../actions/action' 

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

  handlePosts = event => {
    this.props.getPosts();
  }

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
        <button onClick={this.handlePosts} className="btn btn-success">
          GET POSTS
        </button>
      </div>
    );
  }
}

export default connect(null, actions)(PublicForm);
