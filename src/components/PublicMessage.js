import React, { Component } from "react";
import CommentForm from "./comments/CommentForm";
import CommentList from "./comments/CommentList";

class PublicMessage extends Component {
  render() {
    return (
      <div>
        <CommentForm />
        <CommentList />
      </div>
    );
  }
}

export default PublicMessage;
