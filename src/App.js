import React from 'react';
import Form from './components/Form';
import './App.css';
import ShowReminder from './routes/ShowReminder';

class App extends React.Component {
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
    this.backToForm = this.backToForm.bind(this);
  }

  categoryData() {
    this.uniqueCategories = [];

    fetch("https://api-gateway.remind.me/provider/category")
    .then((res) => res.json())
    .then((data) => data.forEach(item => {
      if(this.uniqueCategories.indexOf(item.categoryName) === -1) {
        this.uniqueCategories.push( item.categoryName );
      }
    }));

    this.setState({
      category: this.uniqueCategories
    });
  };

  componentDidMount() {
    this.categoryData();
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
    console.log(
      ' title: ' + this.state.title + 
      ' category: ' + this.state.category +
      ' provider: ' + this.state.provider +
      ' contractEnd: ' + this.state.contractEnd +
      ' notice: ' + this.state.notice
    );

    this.setState({redirect: true});
    this.forceUpdate();
    event.preventDefault();
  }

  backToForm() {
    this.setState({redirect: false});
    this.forceUpdate();
  }

  render() {
    if(!this.state.redirect){
      return(
        <Form
          state = { this.state }

          handleTitleChange = { this.handleTitleChange }
          handleCategoryChange = { this.handleCategoryChange }
          handleProviderChange = { this.handleProviderChange }
          handleContractEndChange = { this.handleContractEndChange }
          handleNoticeChange = { this.handleNoticeChange }
          handleSubmit = { this.handleSubmit }
        />
      );
    } else {
      return(
        <ShowReminder
          state = { this.state }
          backToForm = { this.backToForm }
        />
      );
    }
  }
}

export default App;