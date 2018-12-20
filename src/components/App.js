import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  addComment(comment) {
    this.setState({ comments: [...this.state.comments, comment] });
  }

  deleteComment(comment) {
    const updatedComments = this.state.comments.filter(c => c !== comment);
    this.setState({ comments: updatedComments });
  }

  render() {
    return (
      <div>
        <CommentForm />
        <CommentList />
      </div>
    );
  }
}

export default App;
