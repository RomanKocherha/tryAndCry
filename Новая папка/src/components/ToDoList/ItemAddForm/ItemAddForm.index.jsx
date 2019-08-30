import React, { Component } from 'react';
import './ItemAddForm.css'

export default class ItemAddForm extends Component{

    state ={
        label: ""
    };
    
    OnLabelChange = (event)=>{
        this.setState({
            label: event.target.value
        });
    };

    onSubmit = (event)=>{
        event.preventDefault();
        this.props.onItemAddForm(this.state.label);
        this.setState({
            label: ""
        });
    };

render(){
    return (
        <form
            className='itemAddForm d-flex '
            onSubmit={this.onSubmit}>
            
            <input type="text"
                    className="form-control"
                    onChange={this.OnLabelChange}
                    placeholder="Dalsi cil"
                    value={this.state.label} />
            
            <button
            type="button"
            className='btn btn-outline-secondary '>
                Přidat
                </button>

        </form>
    )
}

}