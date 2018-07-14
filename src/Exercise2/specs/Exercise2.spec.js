import React from 'react';
import {shallow} from 'enzyme';
import Exercise2 from '../Exercise2';

describe('Exercise2', () => {
  let component;
  let instance;
  
  beforeEach(() => {
    component = shallow(<Exercise2/>);
    instance = component.instance();
  });
  
  describe('on instance', () => {
    it('should defined state', () => {
      expect(instance.state).toEqual({});
    });
  });

    describe('Exercise2', () => {
        fit('deberia de retornarme una matriz con el camino a recorrer', () => {
            const matriz3_3 = [
                ['I', '0', '0', 1, '0'],
                [1, '0', 1, 1, '0'],
                [1, '0', '0', 1, '0'],
                ['0', '0', 1, '0', '0'],
                [1, '0', '0', '0', '0']
            ];
            const salida = instance.calculo(matriz3_3);

            expect(instance.state.matriz2.slice(0,5)).toEqual(['x', 'x', '0', 1, 'x']);
            expect(instance.state.matriz2.slice(5,10)).toEqual([1, 'x', 1, 1, 'x']);
            expect(instance.state.matriz2.slice(10,15)).toEqual([1, 'x', '0', 1, 'x']);
            expect(instance.state.matriz2.slice(15,20)).toEqual(['0', 'x', 1, 'x', 'x']);
            expect(instance.state.matriz2.slice(20,25)).toEqual([1, 'x', 'x', 'x', 'x']);
        });
    })
});
