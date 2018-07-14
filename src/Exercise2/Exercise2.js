import React, {Component} from 'react';

class Exercise2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matriz2: []
    };
  }
  calculo = (matriz) =>{
    var newMatriz2 = this.state.matriz2.slice();
    for (let i = 0; i < matriz.length; i++){
        for (let j = 0; j < matriz[0].length; j++){
          if (matriz[i][j] !== 1){
              newMatriz2.push('x');
              this.setState({
                  matriz2: newMatriz2
              })
          }else{
              newMatriz2.push(1);
              this.setState({
                  matriz2: newMatriz2
              })
          }
        }
    }
    var newMatriz1 = this.state.matriz2.slice();
    for (let g = 1; g < 25; g++){
        if (newMatriz1[g] === 'x' && newMatriz1[g+5] === 1){
          newMatriz1[g] = '0';
            this.setState({
                matriz2: newMatriz1
            })
        }
    }

  };

  render() {
    return (
      <div className="container">
        Exercise2 page
      </div>
    );
  }
}

export default Exercise2;
