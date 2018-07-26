function insertDash(num) {
  return (num + '').replace(/([13579][13579]+)/g, x => x.split('').join('-'));
}