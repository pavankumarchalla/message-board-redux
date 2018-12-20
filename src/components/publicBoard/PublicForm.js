import React, { Component } from "react";

class PublicForm extends Component {
  render() {
    return (
      <div>
        <textarea className="form-control" />
        <button className="btn btn-primary">Post</button>
      </div>
    );
  }
}

export default PublicForm;
