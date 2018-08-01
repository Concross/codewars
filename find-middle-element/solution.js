'use strict';

var gimme = function (inputArray) {
  let copy = inputArray.slice(0);
  copy.sort((a,b) => a - b);
  return inputArray.indexOf(copy[1]);
};