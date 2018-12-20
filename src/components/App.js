import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  state = {
    comments: []
  };

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
        <CommentForm addComment={comment => this.addComment(comment)} />
        <CommentList
          comments={this.state.comments}
          deleteComment={comment => this.deleteComment(comment)}
        />
      </div>
    );
  }
}

export default App;
