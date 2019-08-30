import React from 'react';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter.index';

const ToDoListSearch =()=>{
    return(
        <form className="d-flex">
            <input 
            type="text"
            placeholder="search" />
            <ItemStatusFilter />
        </form>
        
    );
}
export default ToDoListSearch;