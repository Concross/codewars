function high(x){
  let testArr = x.split(' ');
  let maxArr = testArr.map(word => word.split('').reduce((acc, curr) => acc + (curr.charCodeAt(0)-96), 0));
  let maxIndex = maxArr.indexOf(Math.max(...maxArr));
  return testArr[maxIndex];
}