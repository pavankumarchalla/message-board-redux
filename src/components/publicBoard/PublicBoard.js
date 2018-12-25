import React, { Component } from "react";
import PublicList from "./PublicList";
import PublicForm from "./PublicForm";
import {connect} from 'react-redux';

class PublicBoard extends Component {
  state = {
    posts: []
  };

  addPost = post => {
    this.setState({ posts: [...this.state.posts, post] });
  };

  render() {
    return (
      <div>
        <div>
          <PublicForm />
          {console.log(this.props)}
          <PublicList post={this.props.posts} />
        </div>
      </div>
    );  
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(PublicBoard);