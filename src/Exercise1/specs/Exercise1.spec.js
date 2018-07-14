import React from 'react';
import {shallow} from 'enzyme';
import Exercise1 from '../Exercise1';

describe('Exercise1', () => {
  let component;
  let instance;
  
  beforeEach(() => {
    component = shallow(<Exercise1/>);
    instance = component.instance();
  });
  
  describe('on instance', () => {
    it('should defined state', () => {
      expect(instance.state).toEqual({});
    });
  });

  describe('Exercise1', () => {
      it('deberia de retornarme una matriz con el camino a recorrer', () => {
        const matriz3_3 = [
            ['I', '0', 1],
            [1, '0', 1],
            [1, '0', 'S']
        ];
        const salida = instance.calculo(matriz3_3);

        expect(instance.state.matriz1.slice(0,3)).toEqual(['x', 'x', 1]);
        expect(instance.state.matriz1.slice(3,6)).toEqual([1, 'x', 1]);
        expect(instance.state.matriz1.slice(6,9)).toEqual([1, 'x', 'x']);
      });
  })
});
