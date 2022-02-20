import React from "react";

class ShowReminder extends React.Component {
  render() {
    return (
      <div>
        <h2>Your Reminder:</h2>
        <div>Title: {this.props.state.title}</div>
        <div>Category: {this.props.state.category}</div>
        <button onClick={this.props.backToForm}>Back to reminder</button>
      </div>
    );
  }
}

export default ShowReminder;