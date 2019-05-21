import React from 'react'
import Meteorite from './Meteorite'

const SearchList = (props) => (
    <div className="search-results">{
        props.list.map((item) => {
            return <Meteorite key={item.id} {...item}/>
        })
      }
        </div>
)
export default SearchList;