'use strict';

function capitalize(s){
  let result = [];
  s = s.split('');
  result.push(s.map((x, i) => i % 2 == 0 ? x.toUpperCase():x).join(''));
  result.push(s.map((x, i) => i % 2 == 1 ? x.toUpperCase():x).join(''));
  return result;
};