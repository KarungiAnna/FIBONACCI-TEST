const { expect } = require('chai');
const { fibonacci } = require('./fibonacci'); 

describe('Fibonacci', () => {
  it('returns 0 for input 0', () => {     //first test (fibonacci(0) === 0)
    expect(fibonacci(0)).to.equal(0);
  });

 it('returns 1 for input 1', () => {    //second test (fibonacci(1) === 1)
  expect(fibonacci(1)).to.equal(1);
  });

  it('returns 13 for input 7', () => {    //third test (general case)
  expect(fibonacci(7)).to.equal(13);
 });


  it('throws RangeError for negative numbers', () => {  //throws errors for negative numbers
    expect(() => fibonacci(-1)).to.throw(RangeError);
  });

  it('throws TypeError for non-integers', () => {   //throw errors for non-integers
    expect(() => fibonacci(2.5)).to.throw(TypeError);
  });

});
