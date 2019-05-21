import React from 'react'
import SearchList from './SearchList'

const SearchPanel = () => (
    <div className="search-panel">
        <form className="search-bar">
        <input />
        <button className="button">Search</button>
        </form> 
        <SearchList list={[{id:1, name:'Abe'}, {id:2, name:'Beta'}]}/>
    </div>
)
export default SearchPanel;