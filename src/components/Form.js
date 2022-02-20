import React, { Component } from 'react';
import './Form.css';
import { Navigate } from "react-router-dom";


class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          title: '',
          category: '',
          provider: '',
          contractEnd: '',
          notice: '',
          redirect: false
      };
  
      this.handleTitleChange = this.handleTitleChange.bind(this);
      this.handleCategoryChange = this.handleCategoryChange.bind(this);
      this.handleProviderChange = this.handleProviderChange.bind(this);
      this.handleContractEndChange = this.handleContractEndChange.bind(this);
      this.handleNoticeChange = this.handleNoticeChange.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleTitleChange(event) {
      this.setState({title: event.target.value});
    }

    handleCategoryChange(event) {
        this.setState({category: event.target.value});
    }

    handleProviderChange(event) {
        this.setState({provider: event.target.value});
    }

    handleContractEndChange(event) {
        this.setState({contractEnd: event.target.value});
    }

    handleNoticeChange(event) {
        this.setState({notice: event.target.value});
    }
  
    handleSubmit(event) {
      alert(
        ' title: ' + this.state.title + 
        ' category: ' + this.state.category +
        ' provider: ' + this.state.provider +
        ' contractEnd: ' + this.state.contractEnd +
        ' notice: ' + this.state.notice
        );

      this.setState({redirect: true});

      event.preventDefault();
    }
  
    render() {
      const redirectAfterSubmit = this.state.redirect;
      if (redirectAfterSubmit) {
          return <Navigate to="/showReminder" />
      }

      return (
        <form className='reminder-form' onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
          </label>

          <label>
            Category:
            <input type="text" value={this.state.category} onChange={this.handleCategoryChange} />
          </label>

          <label>
            Provider:
            <input type="text" value={this.state.provider} onChange={this.handleProviderChange} />
          </label>

          <label>
            Contract end:
            <input type="text" value={this.state.contractEnd} onChange={this.handleContractEndChange} />
          </label>

          <label>
            Notice:
            <input type="text" value={this.state.notice} onChange={this.handleNoticeChange} />
          </label>

          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Form;