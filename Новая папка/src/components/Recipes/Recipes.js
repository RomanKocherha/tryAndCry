import React from 'react';
import './Recipes.css';

const API_URL = 'https://cookbook.jakubricar.cz/api/recipes/';

class Recipes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(dataFromApi => {
        this.setState({ data: dataFromApi });
      });
  };

  render() {
    const { data } = this.state;

    const arrayProcessing = function(item, index) {
      const { _id, title, preparationTime } = item;

      const output = `${title}.`;
      const outputT =`${preparationTime} min.`;

      return (
        <div>
          <table className="table table-hover">
          <tbody>
            <tr>
            <th scope="row">{output}</th>
            <th className='preparationTime'>{outputT}</th>
            </tr>

          </tbody>
          </table>

        </div>
        
        
        /*<div >
          <table>
            <button className={s.button}>
            {output}
            </button>
          </table>
          </div>*/
      );
    };

    return (
      <div>
        <div>{data.map(arrayProcessing)}</div>
      </div>
    );
  }
}

export default Recipes;
