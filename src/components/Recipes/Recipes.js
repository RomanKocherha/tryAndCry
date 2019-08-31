import React from 'react';
import './Recipes.css'
import SwapiService from '../Home/SwapiService';
import {NavLink} from 'react-router-dom';

const API_URL = 'https://cookbook.jakubricar.cz/api/recipes/';

export default class Recipes extends React.Component {


    swapiService = new SwapiService();

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            clickId: null,
        };

        this.updateRecipe = this.updateRecipe.bind(this);
    }

    updateRecipe() {
        const data = this.swapiService.getRecipe('5bf6cbef6ac34b001baef483')
        .then(json => {
            const { _id, preparationTime, ingredients, title } = json;
            this.setState({
                data: [{
                    _id,
                    preparationTime,
                    ingredients,
                    title,
                }],
            });
        });
    };

    componentDidMount = () => {
         fetch(API_URL)
             .then(response => response.json())
             .then(dataFromApi => {
                 this.setState({ data: dataFromApi });
            });
        this.updateRecipe();
    };

    /*saveId=(_id)=>{
        this.setState(({data})=>{
            clickId: _id,
        });
    };*/

    render() {
        const { data } = this.state;
        const {saveId}=this.props;

        const arrayProcessing = function (item) {
            const { _id, title} = item;
            
            return (
                
              <div key={_id}>
             <div>
              <table className="table table-hover">
                <tbody>
                  <tr>
                   <th scope="row" className="title "

                   >
                   {title} 
                   
                       <div>
                       <NavLink to="Podrobnosti">
                            <button  type="button"
                            className='btn btn-outline-secondary'
                           /* onClick={()=> saveId(_id)}*/>
                                Podrobnosti o receptů
                            </button>
                        </NavLink>
                            <button type="button"
                                    className="btn btn-outline-danger buttonsToDoListItem" >
                                    <i className="fa fa-trash-o" />
                            </button>
                        </div>     
                   </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
            );
        };

        return data.length ? (       //проверка пустой ли массив, если пусто вернуть нул
            data.map(arrayProcessing)
        ) : null;
    }
}  