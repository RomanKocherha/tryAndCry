import React, {Component} from 'react';

export default class RecipeHeader extends Component {

    render(){

        return(
            <div>
                    <image />
                    <div>
                        <h2>
                            Recipe Name
                        </h2>
                        <ul>
                            <li>
                                <span>Cas pripravy</span>
                                <span>Ingridienty</span>
                            </li>
                        </ul>
                    </div>

            </div>
        );
    }
}