import React from 'react';
import ToDoListItem from '../ToDoListItem/ToDoListItem';


const ToDoList = ({todos, onDeleted,
    onToggleImportant, onToggleDone})=>{

    const elements = todos.map((item)=> {
      
        const { id, ...ItemsProps } = item;
        return(
            <li key={item.id} className="list-group-item">
                <ToDoListItem
                {...ItemsProps}
                onDeleted={()=> onDeleted(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleDone={()=> onToggleDone(id)}
                />
            </li>
        );
    })
    return(
        <ul className="list-group">
         { elements }   
        </ul>
        );
};

export default ToDoList;

