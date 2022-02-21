import React from "react";

class ShowReminder extends React.Component {
  render() {
    return (
      <div>
        <h2>Your Reminder:</h2>
        <div>Title: {this.props.state.title}</div>
        <div>Category: {this.props.state.category}</div>
        <div>Provider: {this.props.state.provider}</div>
        <div>Contract end date: {this.props.state.contractEnd}</div>
        <div>Notice period: {this.props.state.notice}</div>
        <button onClick={this.props.backToForm}>Back to reminder</button>
      </div>
    );
  }
}

export default ShowReminder;