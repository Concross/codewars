'use strict';
cubeOdd = arr => {

  if (arr.every(x => !isNaN(x))){
    return arr.map(num => Math.pow(num, 3)).reduce((acc, curr) => curr % 2 !== 0 ? acc + curr: acc, 0);
  } else {
    return undefined;
  }
}