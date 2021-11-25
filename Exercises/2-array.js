'use strict';

const array = () => {
  const a = [];
  const getElement = (i) => a[i];
  getElement.pop = () => a.pop();
  getElement.push = function(data) {
    a.push(data);
  };
  return getElement;
};

const Aboba = array();
Aboba.push('a');
Aboba.push('b');
console.log(Aboba.pop(1));
console.log(Aboba(0));

module.exports = { array };
