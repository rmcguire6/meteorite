import React, {Component} from 'react';
import './App.css';
import SearchList from './components/SearchList'

class App extends Component {
  state = {
   
    data: []
  }
  componentDidMount(props) {
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



  render() {
  return (
    <div className="App">
      <div className="App-header">
      <h2>Meteorite Explorer</h2> 
      </div>
      <div className="search-panel">
        <form className="search-bar"onSubmit={this.handleSubmit}>
        <input placeholder="Type your search here"/>
        <button className="button">Search</button>
        </form> 
        <SearchList list={this.state.data}/>
       </div>
    </div>
  );
  }
}
export default App;
