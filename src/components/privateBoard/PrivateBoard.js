import React from "react";

class PrivateMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPost: {
        title: "",
        link: ""
      }
    };
  }

  handleChangeTitle = event => {
    this.setState({
      newPost: { title: event.target.value }
    });
  };

  handleChangeLink = event => {
    this.setState({
      newPost: { link: event.target.value }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addPost(this.state.newPost);
    this.setState({
      inputText: ""
    });
  };
  render() {
    return (
      <form>
        <input
          onChange={this.handleChangeTitle}
          type="text"
          className="form-control"
          value={this.state.titleInput}
          placeholder="Post title"
        />
        <input
          onChange={this.handleChangeLink}
          type="text"
          className="form-control"
          value={this.state.linkInput}
          placeholder="Post link"
        />
        <button onClick={this.handleSubmit} className="btn btn-primary">
          Add
        </button>
      </form>
    );
  }
}
export default PrivateMessage;
