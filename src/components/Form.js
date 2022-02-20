import React, { Component } from 'react';
// import { Navigate } from "react-router-dom";

class Form extends React.Component {
    render() {
      console.log(this.props.state.category);
      
      return (
        <form className='reminder-form' onSubmit={this.props.handleSubmit}>
          <h2>Create Reminder:</h2>
          <label>
            Title:
            <input type="text" value={this.props.state.title} onChange={this.props.handleTitleChange} required />
          </label>

          <label for="category">Category: </label>
          <select id="category">
            {
                this.props.state.category.map((item) => {
                    return <option>{item}</option>;
                })
            }
          </select>

          <label>
            Provider:
            <input type="text" value={this.props.state.provider} onChange={this.props.handleProviderChange} required />
          </label>

          <label>
            Contract end:
            <input type="text" value={this.props.state.contractEnd} onChange={this.props.handleContractEndChange} required />
          </label>

          <label>
            Notice:
            <input type="text" value={this.props.state.notice} onChange={this.props.handleNoticeChange} required />
          </label>

          <input type="submit" value="Next" />
        </form>
      );
    }
  }

  export default Form;