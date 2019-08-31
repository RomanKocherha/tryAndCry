import React from 'react';
import './RandomRecipe.css'
import SwapiService from '../SwapiService';



export default class RandomRecipe extends React.Component {

    swapiService = new SwapiService();

    constructor(props) {
        super(props);

        this.state = {
            data: [],
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

        this.updateRecipe();
    };

    

    render() {
        const { data } = this.state;

        const arrayProcessing = function (item, index) {
            const { _id, title, preparationTime, ingredients } = item;
            
            return (
                <div key={_id}>
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
        };

        return data.length ? (       //проверка пустой ли массив, если пусто вернуть нул
            data.map(arrayProcessing)
        ) : null;
    }
}   




