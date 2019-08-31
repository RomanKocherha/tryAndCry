import React from 'react';
import './App.css';
import Header from './components/Header/Header.index';
import Menu from './components/Menu/Menu.index';
import {BrowserRouter, Route} from "react-router-dom";
import PageToDoList from './components/ToDoList/PageToDoList';
import Diary from './components/Diary/Diary';
import Home from './components/Home/Home.index';
import Recipes from './components/Recipes/Recipes';
import RecipeDitails from './components/Recipes/RecipeDetails/RecipeDetails';


const App =() => {
  return (
    <BrowserRouter>
    <div className='app'>
      <Header />
      <Menu />
      <div className="appWrapperProfile imgBackground">
      <Route path="/Diary" component={Diary}/>
        <Route path="/Home" component={Home}/>
        <Route path="/Recipes" component={Recipes}/>
        <Route path="/ToDoList" component={PageToDoList}/>
        <Route path="/Podrobnosti" component={RecipeDitails}/>

      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
