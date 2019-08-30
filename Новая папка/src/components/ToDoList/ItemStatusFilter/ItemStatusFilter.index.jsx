import React from 'react';


export default class ItemStatusFilter extends React.Component{
render(){

    return(
        <form >
            <button type="button"
                    className="btn btn-dark">All</button>
            <button type="button"
                    className="btn btn-outline-dark">Active</button>
            <button type="button"
                    className="btn btn-outline-dark">Done</button>
        </form>
    );
}
}
