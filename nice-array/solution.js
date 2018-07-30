'use strict';

function isNice(arr){
  return arr.every(value => arr.includes(value - 1) || arr.includes(value + 1)) && arr.length !== 0;
}