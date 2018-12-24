import React, { Component } from "react";
import PublicList from "./PublicList";
import PublicForm from "./PublicForm";

class PublicBoard extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "This is a new title",
        url: "http://google.com"
      }
    ]
  };

  addPost(post) {
    //this.setState({ posts: [...this.state.posts, post] });
  }
  render() {
    return (
      <div>
        <div>
          <PublicForm />
          <PublicList posts={this.state.posts} deletePost={this.deletePost} />
        </div>
      </div>
    );
  }
}

export default PublicBoard;
