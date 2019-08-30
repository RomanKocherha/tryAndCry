
import React from 'react';
import './RandomRecipe.css'
import SwapiService from '../SwapiService';

const API_URL = 'https://cookbook.jakubricar.cz/api/recipes/';

export default class RandomRecipe extends React.Component{

    
    
    swapiService= new SwapiService();
    
   /* state={
        preparationTime: null,
        ingredients: null,
        title: null,
        directions: null
};*/
constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  

/*updateRecipe() {
    this.swapiService
    .getRecipe(7)
    .then((API_URL) => {
        this.setState({
            preparationTime: preparationTime,
            ingredients: ingredients,
            directions: directions,
            title: title

        });
    });
};*/

componentDidMount = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(dataFromApi => {
        this.setState({ data: dataFromApi });
      });
  };

    render(){
const { data } = this.state;

const arrayProcessing = function(item, index) {
    const { _id, title, preparationTime } = item;
    return (
        <div>
          <div>{data.map(arrayProcessing)}</div>
        </div>
      )};

    return(
        <div>
            <img className="recipeImg"
                src="https://previews.123rf.com/images/sergeypykhonin/sergeypykhonin1804/sergeypykhonin180400042/99030834-chef-cook-or-baker-logo-cafe-restaurant-menu-concept-cartoon-vector-illustration.jpg" 
                 />
                 <div>
                     <h2>
                         {title}
                     </h2>
                     <ul>
                         <li>
                             <span>Cas pripravy</span>
                             <span>{preparationTime}</span>
                         </li>
                         <li>
                         <span>Ingridienty</span>
                         <span>{ingredients}</span>
                         </li>
                     </ul>
                 </div>

        </div>
    );
}
}