import React from "react";
import { connect } from "react-redux";
import * as privateMessages from "../actions/private_message";

class PrivateMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentInput: ""
    };
  }

  handleChange = event => {
    this.setState({
      commentInput: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addPrivateMessage(this.state.commentInput);
    this.setState({
      commentInput: ""
    });
  };
  render() {
    return (
      <form>
        <textarea
          onChange={this.handleChange}
          type="text"
          className="form-control"
          value={this.state.commentInput}
          placeholder="comment"
        />
        <button onClick={this.handleSubmit} className="btn btn-primary">
          Add
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  privateMessages
)(PrivateMessageForm);

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     addComment: comment => {
//       dispatch(actions.addComment(comment));
//     }
//   };
// };

// export default connect(
//   null,
//   mapDispatchToProps
// )(CommentForm);
