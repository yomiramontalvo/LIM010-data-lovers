global.window = global;
require('../src/data');
require('./data.spec.js');


describe('drawBasic2', () => {
  
  it('debería ser una función', () => {
    expect(typeof drawBasic2).toEqual('function');
  });

  it('debería retornar "example"', () => {
    expect(drawBasic2(data1,min,max)).toEqual('function');
  });
})
