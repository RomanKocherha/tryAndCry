import React from 'react';
import './MyPosts.css';

const MyPosts= ()=>{
    return(
        <div>
          <div className ='myPosts'>
          <div>
          <h2>Můj Deník</h2>
          <textarea placeholder="Co se stalo zajímavého dneska?">
            
          </textarea>
            </div>
          <button type="button"
                  className="btn btn-outline-success">
                  Přidat
          </button>
          <button type="button"
                  className="btn btn-outline-danger">
                  Smazat
          </button>
        </div>
          </div>   
    );
}
export default MyPosts;