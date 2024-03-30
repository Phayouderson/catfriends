import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cats: [],
      searchfield: ''
    }
  }
  
  componentDidMount() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: {
        'x-api-key': ' live_dc7cJ5G8pbEDpilGQP6qwB2tuIvDulwR6VxXpSQgawgHVKSj74ge4bSiB6v7ZGva'


      }
    };
    fetch("https://api.thecatapi.com/v1/images/search?limit=100&has_breeds=true", requestOptions)
      .then(response => response.json())
      .then(data => {
         const transformedCats = data.map(cat => ({
           name: cat.breeds[0] ? cat.breeds[0].name : 'Unknown',
           breed: cat.breeds[0] ? cat.breeds[0].id : 'Unknown',
           image: cat.url,
         }));
         this.setState({ cats: transformedCats });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { cats, searchfield } = this.state;
    const filteredCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !cats.length ?
      <h2 className='tc' >Cats coming...</h2> :
      (
        <div className='tc'>
          <h1 className='f1'>Cat Friends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            {cats && <CardList cats={filteredCats} />}
          </Scroll>
        </div>
      );
  }
}

export default App;