import React from "react";

class ShowReminder extends React.Component {
  render() {
    return (
      <div>
        <h2>Your Reminder:</h2>
        <div className="show-reminder">
          <div><span>Title: </span>{this.props.state.title}</div>
          <div><span>Category: </span>{this.props.state.category}</div>
          <div><span>Provider: </span>{this.props.state.provider}</div>
          <div><span>Contract end date: </span>{this.props.state.contractEnd}</div>
          <div><span>Notice period: </span>{this.props.state.notice}</div>
          <button onClick={this.props.backToForm}>Back to reminder</button>
        </div>
   
      </div>
    );
  }
}

export default ShowReminder;