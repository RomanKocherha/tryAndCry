import React from 'react';
import './../../App.css';
import s from './Menu.module.css';
import {NavLink} from 'react-router-dom';

const Menu =()=>{
    return(
        <nav className={`${s.menu} ${s.item}`} > 
      <div>
        <NavLink to="/Home" activeClassName={s.active}>Home</NavLink>
        </div>
      <div>
        <NavLink to="/Diary" activeClassName={s.active}>Dennik</NavLink>
        </div>
      <div>
        <NavLink to ="/Recipes" activeClassName={s.active}>Recepty</NavLink>
        </div>
        <div>
        <NavLink to="/ToDoList" activeClassName={s.active}>Správce úkolů</NavLink>
        </div>
      </nav> 
    );
}

export default Menu;