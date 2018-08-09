capitalize = (s, arr) => {
  s = s.split('');

  arr.forEach(index => {
    if (index <= s.length) {
      s[index] = s[index].toUpperCase();
    }
  });

  return s.join('');
};