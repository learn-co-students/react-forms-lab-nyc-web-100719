import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }
  handleTweetChange = event => {
    this.setState({
      message: event.target.value
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => {this.handleTweetChange(event)}} value={this.state.message}name="message" id="message" />
        <br/>
        <span>Characters left: {this.props.maxChars - this.state.message.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;
