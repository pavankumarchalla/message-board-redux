import React, { Component } from "react";
import {connect} from 'react-redux';
import * as actions from '../actions/action' 

class PrivateForm extends Component {
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
    this.props.addMessage(this.state.inputText);
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
          Message
        </button>
        <button onClick={this.props.getMessages} className="btn btn-primary">
          Get Messages
        </button>
      </div>
    );
  }
}

export default connect(null,actions)(PrivateForm);
