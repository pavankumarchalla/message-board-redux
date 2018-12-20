import React from "react";

class PostForm extends React.Component {
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
    this.props.addComment(this.state.commentInput);
    this.setState({
      inputText: ""
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
export default PostForm;
