import React, {Component} from 'react';
import './ToDoListItem.css';


export default class ToDoListItem extends Component{

   /* state = {
        done: false,
        important: false
    };*/

    /*onLabelClick = () => {
        this.setState((state)=>{
            return{
                done: !state.done
            };
        });
    };*/

    /*onMarckImportant = ()=>{
        this.setState((state) => {
            return {
                important: !state.important
            };
        }
        )};*/
render(){ 

    const {label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;
    /*const { done, important } = this.state;*/
    
    let classNames = 'todo';
    
    if(done){
        classNames ='done';
    }else{
        classNames = 'todo';
    }

    if(important){
        classNames='important';
    }
    return(
        <span className ={classNames}>
        <span
            className="todo-list-item-label"
            onClick={/*this.onLabelClick*/onToggleDone}> 
            { label }
            
        </span>
        <button type="button"
                className="btn btn-outline-danger buttonsToDoListItem"
                onClick={onDeleted}>
                <i className="fa fa-trash-o" />
        </button>
        <button type="button"
                className="btn btn-outline-success buttonsToDoListItem"
                onClick={/*this.onMarckImportant*/onToggleImportant}>
                <i className="fa fa-exclamation" />
        </button>
        </span>
    );
}

}





/*
const ToDoListItemFunc =({label, important = false, })=>{
    const style = {
        color: important ? 'Navy': 'black',
        fontWeight: important ? 'bold' : 'normal'
    };
    return(
        <span>
        <span
            style={style}>
            { label }
        </span>
        <button type="button"
                className="btn btn-outline-danger buttonsToDoListItem">
                <i className="fa fa-trash-o" />
        </button>
        <button type="button"
                className="btn btn-outline-success buttonsToDoListItem">
                <i className="fa fa-exclamation" />
        </button>
        </span>
    );
}*/
