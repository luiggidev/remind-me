import React, { Component } from 'react';
// import { Navigate } from "react-router-dom";


class Form extends React.Component {

    render() {
      return (
        <form className='reminder-form' onSubmit={this.props.handleSubmit}>
          <h2>Create Reminder:</h2>
          <label>
            Title:
            <input type="text" value={this.props.state.title} onChange={this.props.handleTitleChange} required />
          </label>

          <label htmlFor="category">Category: </label>

          <select 
          id="category"
          className="category"
          value={this.props.state.category} 
          onChange={this.props.handleCategoryChange}
          >
            {
              this.props.state.categoryData.map((item) => {
                  return <option key={item.id} value={item.category}>{item.category}</option>;
              })
            }
          </select>

          <select 
          id="provider"
          className="provider"
          value={this.props.state.provider} 
          onChange={this.props.handleProviderChange}
          >
            {
              this.props.state.providerData.map((item) => {
                  return <option key={item.id} value={item.provider}>{item.provider}</option>;
              })
            }
          </select>

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