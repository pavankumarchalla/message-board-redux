import React from "react";
import PostList from "./PostList";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
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
        {/* <TodoForm addTodo={item => this.props.addTodo(item)} /> */}
        <PostList posts={this.state.posts} deletePost={this.deletePost} />
      </div>
    );
  }
}

export default App;
