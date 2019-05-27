import React from 'react'

import Table from 'rc-table'

const columns = [
    
    {title: 'Name', dataIndex: 'name', key:'name', width: 75},
    {title: 'Id', dataIndex:'id', key: 'id', width: 10},
    {title: 'Name Type', dataIndex: 'nametype', key: 'nametype',width: 15},
    {title: 'Rec Class', dataIndex: 'recclass', key:'recclass', width: 25},
    {title: 'Mass(g)', dataIndex: 'mass', key:'mass', width: 10},
    {title: 'Fall', dataIndex: 'fall', key:'fall', width: 10},
    {title: 'Year', dataIndex: 'year', key:'year', width: 40},
    {title: 'Latitude', dataIndex: 'reclat', key:'reclat', width: 30},
    {title: 'Longitude', dataIndex: 'reclong', key:'reclong', width: 30},
]

const SearchList = (props) => {
    return (
    <div className="search-results">
         <Table columns={columns} data={props.list} rowKey={record => record.id} />       
    </div> 
    )}
export default SearchList;