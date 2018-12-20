import React, { Component } from "react";
import PrivateMessageForm from "./PrivateMessageForm";
import PrivateMessageList from "./PrivateMessageList";

class PrivateMessage extends Component {
  render() {
    return (
      <div>
        <PrivateMessageForm />
        <PrivateMessageList />
      </div>
    );
  }
}

export default PrivateMessage;
