import React, {Component} from 'react';

export class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matriz1: []

    };
  }

  calculo = (matriz) => {
    var newMatriz1 = this.state.matriz1.slice();
      for (let i = 0; i < matriz.length; i++) {
          for (let j = 0; j < matriz[0].length; j++){
              if (matriz[i][j] !== 1){
                  newMatriz1.push('x');
                  this.setState({
                      matriz1: newMatriz1
                  })
              }else{
                  newMatriz1.push(1);
                  this.setState({
                      matriz1: newMatriz1
                  })
              }
          }
      }
  };

  render() {
    return (
      <div className="container">
        <div>
            <button type="text" onClick={this.calculo}> </button>
        </div>
      </div>
    );
  }
}

export default Exercise1;
