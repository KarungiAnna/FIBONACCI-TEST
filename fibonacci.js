function fibonacci(n) {
//trow error if not a number or not an integer
  if (typeof n !== 'number' || !Number.isInteger(n)) throw new TypeError('n must be an integer');
  if (n < 0) throw new RangeError('n must be >= 0');

  if (n === 0) return 0; //
  if (n === 1) return 1; // update implementation
  
 //throw new Error('it is not implemented'); 

//Update implementation with recursion:
 //return fibonacci(n - 1) + fibonacci(n - 2);

 //Update with loop:
 let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return b;

}

module.exports = { fibonacci };
