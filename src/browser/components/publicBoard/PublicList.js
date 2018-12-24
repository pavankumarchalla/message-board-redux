import React from "react";

class PostList extends React.Component {
  handleDelete = item => {
    // this.props.deleteTodo(item);
  };

  renderPost(post) {
    if (post) {
      return <a href={post.url}>{post.title}</a>;
    }
  }

  render() {
    if (!this.props.posts.length > 0) {
      return "loading....";
    }

    return (
      <ul className="list-group">
        {this.props.posts.map(post => {
          return (
            <div key={post.title} className="card mt-1">
              <div className="card-body">
                <span className="ml-2" role="img" aria-label="">
                  👍
                </span>
                <span className="mr-4 upvotes">1</span>
                {this.renderPost(post)}
                <span
                  onClick={this.handleDelete.bind(this, post)}
                  className="float-right"
                >
                  delete
                </span>
              </div>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default PostList;
