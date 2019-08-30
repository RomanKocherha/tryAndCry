import React, { Component} from 'react';
import ToDoListHeader from './ToDoListHeader/ToDoListHeader.index';
import ToDoListSearch from './ToDoListSearch/ToDoListSearch.index';
import ToDoList from './ToDoList/ToDoList.index';
import ItemStatusFilter from './ItemStatusFilter/ItemStatusFilter.index';
import ItemAddForm from './ItemAddForm/ItemAddForm.index';
import { isTerminatorless } from '@babel/types';


export default class PageToDoList extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink coffee'),
            this.createTodoItem('Make a cool react app'),
            this.createTodoItem('Have a lunch'),
           /* {label: 'Drink coffee', important: false, id: 1},
            {label: 'Make a cool react app', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}*/
        ],
        term: ""
    };
    
    createTodoItem (label){
        return{
            label,
            important: false,
            done: false,
            id: this.maxId++
        }

    };

    deleteItem =(id)=>{
        this.setState(({ todoData })=>{
        const idx = todoData.findIndex((el)=>el.id===id);
        const newArrey= [
            ...todoData.slice(0, idx),
            ...todoData.slice(idx +1)
        ];
        return{
            todoData: newArrey
        };
        });
    };

    addItem =(text)=>{
        const newItem =this.createTodoItem(text);
        /*{
            label: text,
            important: false,
            id: this.id++
        };*/
        
        this.setState(({todoData})=>{
            const newArrey= [
                ...todoData,
                newItem
            ];
            return{
                todoData: newArrey
            };
        })
    };

    onToggleDone = (id)=> {     //Tady jsem stratil dva dnu :(
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el)=>el.id===id);

            const oldItem = todoData[idx];
            const newItem = {...oldItem,
                done: !oldItem.done};

            const newArr= [
              ...todoData.slice(0, idx),
                newItem,
               ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArr
            }
        });
    };
    
    onToggleImportant = (id)=> {     //Tady jsem stratil dva dnu :(
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el)=>el.id===id);

            const oldItem = todoData[idx];
            const newItem = {...oldItem, important: !oldItem.important};

            const newArrey= [
                ...todoData.slice(0, idx),
                newItem,
                ...todoData.slice(idx +1)
            ];

            return {
                todoData: newArrey
            }
        });
    };

render() {

const doneCount = this.state.todoData.filter((el)=>el.done).length;
const todoCount = this.state.todoData.length - doneCount;   
    return(
        <div>
            <ToDoListHeader Todo={doneCount} done={todoCount}/>
            <div>
                <ToDoListSearch />
            </div>
            
            <ToDoList
            todos={this.state.todoData}
            onDeleted={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
            />
            <ItemAddForm onItemAddForm={this.addItem} />

        </div>
        );
};

};    
