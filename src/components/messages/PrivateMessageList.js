import React from "react";
import { connect } from "react-redux";
import * as messageActionCreator from "../../actions/private_message";

class CommentList extends React.Component {
  handleDelete = comment => {
    this.props.deletePrivateMessage(comment);
  };

  render() {
    return (
      <ul className="list-group">
        {this.props.messages.map(comment => {
          return (
            <div key={comment} className="card mt-1">
              <div className="card-body">
                <span className="ml-2" role="img" aria-label="">
                  👍
                </span>
                <span className="mr-4 upvotes">1</span>
                {comment}
                <span
                  onClick={this.handleDelete.bind(this, comment)}
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

const mapStateToProps = state => {
  return {
    messages: state.privateMessages
  };
};
export default connect(
  mapStateToProps,
  messageActionCreator
)(CommentList);
