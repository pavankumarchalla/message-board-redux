import React from "react";
import {connect} from 'react-redux'
import * as actions from '../actions/action'

class PostList extends React.Component {
  handleDelete = post => {
    this.props.deletePost(post);
  };

  render() {
    if (!this.props.posts.length > 0) {
      return "no items found";
    }

    return (
      <ul className="list-group">
        {this.props.posts.map((post, key) => {
          return (
            <div key={key} className="card mt-1">
              <div className="card-body">
                {!post.userId ?
                  <span className="ml-2" role="img" aria-label="">
                    👍{" "}
                    {post.title ? (
                      <span>{post.title}</span>
                    ) : (
                      <span>{post}</span>
                    )}
                  </span>
                :
                <div>
                  <span className="mr-4 upvotes">1</span>
                  <p>UserID: {post.userId}</p>
                  <p>ID: {post.id}</p>
                  <p>Title: {post.title}</p>
                  <p>Body: {post.body}</p>
                  <span
                    onClick={this.handleDelete.bind(this, post)}
                    className="float-right"
                  >
                    delete
                  </span>
                </div>
              }
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, actions)(PostList);