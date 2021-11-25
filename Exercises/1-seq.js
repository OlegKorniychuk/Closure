'use strict';

const seq = (f) => (g) => (
  typeof g === 'function' ? seq((x) => f(g(x))) : f(g)
);

console.dir(seq((x) => 2 * x)((x) => x + 5)((x) => x + 4)(3));

module.exports = { seq };
