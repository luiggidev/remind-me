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
        categoryData: [{id: 1, category: 'Choose Item'}],
        providerData: [{id: 1, provider: 'Waiting for category'}],
        contractEnd: '',
        notice: '',
        redirect: false,
        categoryFetched: false,
        providerFetched: false,

    };
    this.fetchCategoryData = this.fetchCategoryData.bind(this);
    this.fetchProviderData = this.fetchProviderData.bind(this);

    this.parseCategoryData = this.parseCategoryData.bind(this);
    this.parseProviderData = this.parseProviderData.bind(this);

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleProviderChange = this.handleProviderChange.bind(this);
    this.handleContractEndChange = this.handleContractEndChange.bind(this);
    this.handleNoticeChange = this.handleNoticeChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.backToForm = this.backToForm.bind(this);
  }
 
  parseCategoryData(data) {
    this.uniqueCategories = [];
    this.uniqueCategories.push( { id: '1', category: 'Choose Item' });

   data.forEach(item => {
      if(this.uniqueCategories.indexOf( item.categoryName ) === -1) {
        this.uniqueCategories.push( { id: item.id, category: item.categoryName });
      }
    })

    this.setState({
      categoryData: this.uniqueCategories, 
      categoryFetched: true
    });

    return data;
  }

  fetchCategoryData() {
    fetch("https://api-gateway.remind.me/provider/category")
    .then((res) => res.json())
    .then((data) => this.parseCategoryData(data))
    .catch((error) => { console.error(error) });
  };

  componentDidMount() {
    this.fetchCategoryData();
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  parseProviderData(data){
    this.uniqueProviders = [];

    data.forEach(item => {
      if(this.uniqueProviders.indexOf( item.company.companyName ) === -1) {
        this.uniqueProviders.push( { id: item.id, provider: item.company.companyName });
      }
    }) 

    this.setState({
      providerData: this.uniqueProviders, 
      providerFetched: true
    });

    return data;
  };

  fetchProviderData(event) {
    this.setState({providerData: [{id: 1, provider: 'Loading...'}]});

    this.state.categoryData.forEach(item => {
      if( item.category === event.target.value ) {
        fetch(`https://api-gateway.remind.me/provider/categoryProvider/category/${item.id}`)
        .then((res) => res.json())
        .then((data) => this.parseProviderData(data))
        .catch((error) => { console.error(error) });
      }
    })
  }

  handleCategoryChange(event) {
    this.setState({category: event.target.value});

    console.log(event.target.value);
    if(event.target.value === 'Choose Item'){
      this.setState({providerData: [{id: 1, provider: 'Waiting for category'}]});
    } else {
      this.fetchProviderData(event);
    }

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
    if( !this.state.redirect ){
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