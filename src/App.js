import React, {Component} from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import SearchList from './components/SearchList'

class App extends Component {
  state = {
    name: '',
    data: []
  }
  componentDidMount() {
    try {
      fetch('https://data.nasa.gov/resource/gh4g-9sfh.json').then((response)=> {
      response.json().then((data) => {
        if (data.error) {
          console.log(data.error)
        } else {
          this.setState(()=>{
            return ({ data: data})
          })
        }
      })
    })
  } catch (e) {
    console.log('Error loading data')
  }
}

handleSearchChange = (name) => {
    this.setState(() => ({
      name: name
    }))

}
  render() {
    let filteredList = []
    filteredList = this.state.data.filter(item => item.name.toLowerCase().includes(this.state.name.toLowerCase()))
  return (
    <div className="App">
      <div className="App-header">
      <h2>Meteorite Explorer</h2> 
      </div>
      <div className="search-panel">
        <SearchBar handleSearchChange ={this.handleSearchChange} />
        {this.state.name !== '' ? <SearchList list={filteredList}/> : <SearchList list={this.state.data} />}
      </div>
    </div>
  );
  }
}
export default App;
