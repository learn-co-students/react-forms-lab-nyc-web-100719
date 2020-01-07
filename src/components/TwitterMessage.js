import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  //update state based on input
  handleChange=(event)=>{
  this.setState({
    message: event.target.value
  })
  }

  //remaining values is this.props.maxChars - this.state.message
  charLeft=()=>{
    
  }

  render() {
    return (
      <div>
        <strong>Your message: {this.state.message}</strong>
        <p>You have {this.props.maxChars - this.state.message.length} characters left</p>
        <input type="text" name="message" id="message" onChange={event => this.handleChange(event)} value={this.state.message} />
      </div>
    );
  }
}

export default TwitterMessage;
