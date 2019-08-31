
import React from 'react';
import s from'./RecipeDetails.module.css';
import SwapiService from '../../Home/SwapiService';




export default class RecipeDitails extends React.Component {

    swapiService = new SwapiService();

    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };

        this.updateRecipe = this.updateRecipe.bind(this);
    }

    updateRecipe() {
        const data = this.swapiService.getRecipe('58067fc20cde48000f329083')
        .then(json => {
            const { _id, preparationTime, ingredients, title, directions, amountUnit, amount, name } = json;
            this.setState({
                data: [{
                    _id,
                    preparationTime,
                    ingredients,
                    title,
                    directions,
                    amountUnit,
                    amount,
                    name,
                }],
            });
        });
    };

    componentDidMount = () => {

        this.updateRecipe();
    };

    

    render() {
        const { data } = this.state;

        const arrayProcessing = function (item, index) {
            const { _id, title, preparationTime, ingredients, directions, amountUnit, amount, name } = item;
            
            return (
                <div    key={_id}
                className={s.recipe}>
           <div className={s.recipeHeader}>
           <h2>{title}</h2>
           <span>Čas přípravy:  {preparationTime} min.</span>
             
            </div>
            <div className={s.button}>
                <button type="button"
                    className="btn btn-outline-danger buttonsToDoListItem" >
                    <i className="fa fa-trash-o" />
                </button>
                <button
            type="button"
            className='btn btn-outline-secondary buttonsToDoListItem'>
                Přidat
                </button>
            </div>
           <div className={s.ingredients}>
               <table className="table table-hover">
                   <tbody>
                       <tr>
                           <td>{amount}</td>
                           <td>{amountUnit}</td>
                           <td>{name}</td>
                       </tr>
                   </tbody>
               </table>
            </div>
            <div className={s.steps}>
                     <li /*onClick={this.onToggleDone}*/>
                     {directions}
                     </li>
            </div>
        </div>
            );
        };

        return data.length ? (       //проверка пустой ли массив, если пусто вернуть нул
            data.map(arrayProcessing)
        ) : null;
    }
}   
